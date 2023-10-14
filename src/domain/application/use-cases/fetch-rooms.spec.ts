import { DateUtils } from '@/infra/utils/date-utils'
import { FakeRoomsService } from 'test/services/fake-rooms-service'
import { RoomsService } from '../services/rooms-service'
import { DateFormatter } from '../utils/date-formatter'
import { DateValidator } from '../utils/date-validator'
import { CheckInDateGreaterThanCheckOutDateError } from './errors/check-in-date-greater-than-check-out-date-error'
import { FetchRoomsUseCase } from './fetch-rooms'

let roomsService: RoomsService
let dateFormatter: DateFormatter
let dateValidator: DateValidator

let sut: FetchRoomsUseCase

describe('Fetch rooms', () => {
  beforeEach(() => {
    roomsService = new FakeRoomsService()
    dateFormatter = new DateUtils()
    dateValidator = new DateUtils()

    sut = new FetchRoomsUseCase(roomsService, dateFormatter, dateValidator)
  })

  it('should be able to fetch rooms', async () => {
    const result = await sut.execute({
      checkIn: new Date(2023, 9, 15),
      checkOut: new Date(2023, 9, 18),
    })

    expect(result.isRight()).toBe(true)

    if (result.isRight()) {
      expect(result.value.rooms).toHaveLength(10)

      expect(result.value).toEqual({
        rooms: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            description: expect.any(String),
            priceWithDiscount: expect.any(String),
            priceWithoutDiscount: expect.any(String),
            discountPercentage: expect.any(String),
            images: expect.arrayContaining([
              expect.objectContaining({
                src: expect.any(String),
                main: expect.any(Boolean),
              }),
            ]),
          }),
        ]),
      })
    }
  })

  it('should not be able to fetch rooms with check-in date greater than check-out date', async () => {
    const result = await sut.execute({
      checkIn: new Date(2023, 9, 20),
      checkOut: new Date(2023, 9, 18),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(CheckInDateGreaterThanCheckOutDateError)
  })
})
