import { faker } from '@faker-js/faker'

import {
  RoomImage,
  RoomImageProps,
} from '@/domain/enterprise/entities/value-objects/room-image'

export function makeRoomImage(override: Partial<RoomImageProps> = {}) {
  const roomImage = RoomImage.create({
    src: faker.image.url(),
    main: false,
    ...override,
  })

  return roomImage
}
