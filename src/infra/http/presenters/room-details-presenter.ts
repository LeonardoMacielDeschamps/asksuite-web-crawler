import { RoomDetails } from '@/domain/enterprise/entities/value-objects/room-details'

export class RoomDetailsPresenter {
  static toHttp(roomDetails: RoomDetails) {
    return {
      name: roomDetails.name,
      description: roomDetails.description,
      price: roomDetails.priceWithDiscount,
      image: roomDetails.images.find((image) => image.main)?.src,
    }
  }
}
