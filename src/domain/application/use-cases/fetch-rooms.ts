import { Either, right } from '@/core/either'
import { RoomDetails } from '@/domain/enterprise/entities/value-objects/room-details'
import { RoomsRepository } from '../repositories/rooms-repository'
import { Injectable } from '@nestjs/common'

interface FetchRoomsUseCaseRequest {
  checkIn: string
  checkOut: string
}

type FetchRoomsUseCaseResponse = Either<
  null,
  {
    rooms: RoomDetails[]
  }
>

@Injectable()
export class FetchRoomsUseCase {
  constructor(private roomsRepository: RoomsRepository) {}

  async execute({
    checkIn,
    checkOut,
  }: FetchRoomsUseCaseRequest): Promise<FetchRoomsUseCaseResponse> {
    const rooms =
      await this.roomsRepository.findRoomsByCheckInDateAndCheckOutDate(
        checkIn,
        checkOut,
      )

    return right({
      rooms,
    })
  }
}
