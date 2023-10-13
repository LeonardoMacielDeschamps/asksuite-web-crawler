import { ValueObject } from '@/core/entities/value-object'

export interface RoomImageProps {
  src: string
  main: boolean
}

export class RoomImage extends ValueObject<RoomImageProps> {
  get src() {
    return this.props.src
  }

  get main() {
    return this.props.main
  }

  static create(props: RoomImageProps) {
    const roomImage = new RoomImage(props)

    return roomImage
  }
}
