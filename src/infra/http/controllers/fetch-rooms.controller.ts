import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
import * as dayjs from 'dayjs'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { FetchRoomsUseCase } from '@/domain/application/use-cases/fetch-rooms'
import { RoomDetailsPresenter } from '../presenters/room-details-presenter'

const fetchRoomsBodySchema = z.object({
  checkin: z.coerce.date().transform((date) => {
    const dateUtc = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    )
    return dayjs(dateUtc).format('DD/MM/YYYY')
  }),
  checkout: z.coerce.date().transform((date) => {
    const dateUtc = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    )
    return dayjs(dateUtc).format('DD/MM/YYYY')
  }),
})

const bodyValidationPipe = new ZodValidationPipe(fetchRoomsBodySchema)

type FetchRoomsBodySchema = z.infer<typeof fetchRoomsBodySchema>

@Controller('/search')
export class FetchRoomsController {
  constructor(private fetchRooms: FetchRoomsUseCase) {}

  @Post()
  @HttpCode(200)
  async handle(@Body(bodyValidationPipe) body: FetchRoomsBodySchema) {
    const { checkin: checkIn, checkout: checkOut } = body

    const result = await this.fetchRooms.execute({
      checkIn,
      checkOut,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const rooms = result.value.rooms.map(RoomDetailsPresenter.toHttp)

    return rooms
  }
}
