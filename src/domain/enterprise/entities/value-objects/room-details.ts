import { ValueObject } from '@/core/entities/value-object'
import { RoomImage } from './room-image'

export interface RoomDetailsProps {
  name: string | null
  description: string | null
  priceWithDiscount: string | null
  priceWithoutDiscount: string | null
  discountPercentage: string | null
  images: RoomImage[]
}

export class RoomDetails extends ValueObject<RoomDetailsProps> {
  get name() {
    return this.props.name
  }

  get description() {
    return this.props.description
  }

  get priceWithDiscount() {
    return this.props.priceWithDiscount
  }

  get priceWithoutDiscount() {
    return this.props.priceWithoutDiscount
  }

  get discountPercentage() {
    return this.props.discountPercentage
  }

  get images() {
    return this.props.images
  }

  static create(props: RoomDetailsProps) {
    return new RoomDetails(props)
  }
}
