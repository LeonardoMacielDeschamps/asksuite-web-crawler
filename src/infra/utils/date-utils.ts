import dayjs from 'dayjs'

import { DateFormatter } from '@/domain/application/utils/date-formatter'
import { DateValidator } from '@/domain/application/utils/date-validator'

export class DateUtils implements DateFormatter, DateValidator {
  format(date: Date, format: string): string {
    return dayjs(date).format(format)
  }

  isBefore(referenceDate: Date, comparisonDate: Date): boolean {
    return dayjs(referenceDate).isBefore(comparisonDate)
  }

  isSame(referenceDate: Date, comparisonDate: Date): boolean {
    return dayjs(referenceDate).isSame(comparisonDate)
  }

  isAfter(referenceDate: Date, comparisonDate: Date): boolean {
    return dayjs(referenceDate).isAfter(comparisonDate)
  }
}
