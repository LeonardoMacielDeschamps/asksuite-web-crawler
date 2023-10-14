import { RoomsService } from '@/domain/application/services/rooms-service'
import { Injectable } from '@nestjs/common'
import { PuppeteerService } from '../puppeteer.service'
import { EnvService } from '@/infra/env/env.service'
import {
  RoomDetails,
  RoomDetailsProps,
} from '@/domain/enterprise/entities/value-objects/room-details'
import { RoomImageProps } from '@/domain/enterprise/entities/value-objects/room-image'
import { PuppeteerRoomDetailsMapper } from '../mappers/puppeteer-room-details-mapper'

export type PuppeteerRoomDetailsProps = Omit<RoomDetailsProps, 'images'> & {
  images: RoomImageProps[]
}

@Injectable()
export class PuppeteerRoomsService implements RoomsService {
  constructor(
    private envService: EnvService,
    private puppeteer: PuppeteerService,
  ) {}

  async findRoomsByCheckInDateAndCheckOutDate(
    checkIn: string,
    checkOut: string,
  ): Promise<RoomDetails[]> {
    const baseUrl = this.envService.get('BASE_URL_SCRAPING')

    const url = `${baseUrl}/D/Reserva?checkin=${checkIn}&checkout=${checkOut}&cidade=&hotel=12&adultos=2&criancas=&destino=Pratagy+Beach+Resort+All+Inclusive&promocode=&tarifa=`

    const rooms = await this.puppeteer.fetchData<PuppeteerRoomDetailsProps>(
      url,
      () => {
        const rooms: PuppeteerRoomDetailsProps[] = []

        const roomElements = document.querySelectorAll(
          '#tblAcomodacoes .row-quarto',
        )

        for (const roomElement of roomElements) {
          const images: RoomImageProps[] = []

          const roomColumnElement = roomElement.querySelector('.tdQuarto')

          const detailsColumnElement = roomElement.querySelector('.tdContainer')

          const name =
            roomColumnElement?.querySelector('.quartoNome')?.textContent ?? null

          const description =
            roomColumnElement?.querySelector('.quartoDescricao p')
              ?.textContent ?? null

          const priceWithDiscount =
            detailsColumnElement?.querySelector('.valorFinalDiscounted')
              ?.textContent ?? null

          const priceWithoutDiscount =
            detailsColumnElement?.querySelector('.valorSemDesconto')
              ?.textContent ?? null

          const discountPercentage =
            detailsColumnElement?.querySelector('.precentualDesconto')
              ?.textContent ?? null

          const imageContainerElements =
            roomColumnElement?.querySelectorAll('.slick-list li') ?? []

          for (const imageContainerElement of imageContainerElements) {
            const imgElement = imageContainerElement.querySelector('img')

            const src = imgElement?.getAttribute('data-src')

            if (src) {
              const main =
                imageContainerElement.getAttribute('aria-hidden') === 'false'

              const roomImage = { src, main }

              images.push(roomImage)
            }
          }

          const roomDetails = {
            name,
            description,
            priceWithDiscount,
            priceWithoutDiscount,
            discountPercentage,
            images,
          }

          rooms.push(roomDetails)
        }

        return rooms
      },
    )

    const roomsDetails = rooms.map(PuppeteerRoomDetailsMapper.toDomain)

    return roomsDetails
  }
}
