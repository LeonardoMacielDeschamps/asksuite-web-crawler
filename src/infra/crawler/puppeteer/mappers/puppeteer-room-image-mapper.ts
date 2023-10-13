import {
  RoomImage,
  RoomImageProps,
} from '@/domain/enterprise/entities/value-objects/room-image'

export class PuppeteerRoomImageMapper {
  static toDomain(raw: RoomImageProps): RoomImage {
    return RoomImage.create({
      src: raw.src,
      main: raw.main,
    })
  }
}
