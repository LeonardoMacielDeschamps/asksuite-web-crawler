import { RoomsService } from '@/domain/application/services/rooms-service'
import { RoomDetails } from '@/domain/enterprise/entities/value-objects/room-details'
import { makeRoomDetails } from 'tests/factories/make-room-details'

export class FakeRoomsService implements RoomsService {
  async findRoomsByCheckInDateAndCheckOutDate(): Promise<RoomDetails[]> {
    const rooms: RoomDetails[] = []

    for (let i = 0; i < 10; i++) {
      rooms.push(makeRoomDetails())
    }

    return rooms
  }
}
