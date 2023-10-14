import { faker } from '@faker-js/faker'

import {
  RoomDetails,
  RoomDetailsProps,
} from '@/domain/enterprise/entities/value-objects/room-details'

import { makeRoomImage } from './make-room-image'

export function makeRoomDetails(override: Partial<RoomDetailsProps> = {}) {
  const roomDetails = RoomDetails.create({
    name: faker.lorem.sentence(3),
    description: faker.lorem.text(),
    priceWithDiscount: faker.commerce.price({
      min: 1000,
      max: 1500,
      dec: 2,
      symbol: 'R$',
    }),
    priceWithoutDiscount: faker.commerce.price({
      min: 1500,
      max: 2000,
      dec: 2,
      symbol: 'R$',
    }),
    discountPercentage: `${faker.number.int({ min: 10, max: 15 }).toString()}%`,
    images: [
      makeRoomImage({ main: true }),
      makeRoomImage(),
      makeRoomImage(),
      makeRoomImage(),
      makeRoomImage(),
    ],
    ...override,
  })

  return roomDetails
}
