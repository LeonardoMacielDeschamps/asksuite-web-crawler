import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
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
    return dateUtc
  }),
  checkout: z.coerce.date().transform((date) => {
    const dateUtc = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    )
    return dateUtc
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
      throw new BadRequestException(result.value.message)
    }

    const rooms = result.value.rooms.map(RoomDetailsPresenter.toHttp)

    return rooms
  }
}
