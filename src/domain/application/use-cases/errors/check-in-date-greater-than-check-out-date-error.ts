import { UseCaseError } from '@/core/errors/use-case-error'

export class CheckInDateGreaterThanCheckOutDateError
  extends Error
  implements UseCaseError
{
  constructor() {
    super('Check-in date cannot be greater than check-out date.')
  }
}
