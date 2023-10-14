import { RoomDetails } from '../../enterprise/entities/value-objects/room-details'

export abstract class RoomsService {
  abstract findRoomsByCheckInDateAndCheckOutDate(
    checkIn: string,
    checkOut: string,
  ): Promise<RoomDetails[]>
}
