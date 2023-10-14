import { Either, left, right } from '@/core/either'
import { RoomDetails } from '@/domain/enterprise/entities/value-objects/room-details'
import { RoomsService } from '../services/rooms-service'
import { Injectable } from '@nestjs/common'
import { CheckInDateGreaterThanCheckOutDateError } from './errors/check-in-date-greater-than-check-out-date-error'
import { DateFormatter } from '../utils/date-formatter'
import { DateValidator } from '../utils/date-validator'

interface FetchRoomsUseCaseRequest {
  checkIn: Date
  checkOut: Date
}

type FetchRoomsUseCaseResponse = Either<
  CheckInDateGreaterThanCheckOutDateError,
  {
    rooms: RoomDetails[]
  }
>

@Injectable()
export class FetchRoomsUseCase {
  constructor(
    private roomsService: RoomsService,
    private dateFormatter: DateFormatter,
    private dateValidator: DateValidator,
  ) {}

  async execute({
    checkIn,
    checkOut,
  }: FetchRoomsUseCaseRequest): Promise<FetchRoomsUseCaseResponse> {
    if (this.dateValidator.isAfter(checkIn, checkOut)) {
      return left(new CheckInDateGreaterThanCheckOutDateError())
    }

    const checkInParsed = this.dateFormatter.format(checkIn, 'DD/MM/YYYY')
    const checkOutParsed = this.dateFormatter.format(checkOut, 'DD/MM/YYYY')

    const rooms = await this.roomsService.findRoomsByCheckInDateAndCheckOutDate(
      checkInParsed,
      checkOutParsed,
    )

    return right({
      rooms,
    })
  }
}
