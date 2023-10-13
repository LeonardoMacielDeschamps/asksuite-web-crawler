import { RoomDetails } from '../../enterprise/entities/value-objects/room-details'

export abstract class RoomsRepository {
  abstract findRoomsByCheckInDateAndCheckOutDate(
    checkIn: string,
    checkOut: string,
  ): Promise<RoomDetails[]>
}
