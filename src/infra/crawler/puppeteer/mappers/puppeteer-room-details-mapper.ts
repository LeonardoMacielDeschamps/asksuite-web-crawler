import { RoomDetails } from '@/domain/enterprise/entities/value-objects/room-details'
import { PuppeteerRoomDetailsProps } from '../services/puppeteer-rooms-service'
import { PuppeteerRoomImageMapper } from './puppeteer-room-image-mapper'

export class PuppeteerRoomDetailsMapper {
  static toDomain(raw: PuppeteerRoomDetailsProps): RoomDetails {
    return RoomDetails.create({
      name: raw.name,
      description: raw.description,
      priceWithDiscount: raw.priceWithDiscount,
      priceWithoutDiscount: raw.priceWithDiscount,
      discountPercentage: raw.discountPercentage,
      images: raw.images.map(PuppeteerRoomImageMapper.toDomain),
    })
  }
}
