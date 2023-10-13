export abstract class DateValidator {
  abstract isBefore(referenceDate: Date, comparisonDate: Date): boolean
  abstract isSame(referenceDate: Date, comparisonDate: Date): boolean
  abstract isAfter(referenceDate: Date, comparisonDate: Date): boolean
}
