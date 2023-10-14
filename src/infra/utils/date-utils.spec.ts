import { DateUtils } from '@/infra/utils/date-utils'

let sut: DateUtils

describe('Date utils', () => {
  beforeEach(() => {
    sut = new DateUtils()
  })

  it('should validate isAfter to be true', async () => {
    const referenceDate = new Date(2023, 10, 2)
    const comparisonDate = new Date(2023, 10, 1)

    const isAfter = sut.isAfter(referenceDate, comparisonDate)

    expect(isAfter).toBe(true)
  })

  it('should validate isAfter to be false', async () => {
    const referenceDate = new Date(2023, 10, 1)
    const comparisonDate = new Date(2023, 10, 2)

    const isAfter = sut.isAfter(referenceDate, comparisonDate)

    expect(isAfter).toBe(false)
  })

  it('should validate isSame to be true', async () => {
    const referenceDate = new Date(2023, 10, 1)
    const comparisonDate = new Date(2023, 10, 1)

    const isSame = sut.isSame(referenceDate, comparisonDate)

    expect(isSame).toBe(true)
  })

  it('should validate isSame to be false', async () => {
    const referenceDate = new Date(2023, 10, 1)
    const comparisonDate = new Date(2023, 10, 2)

    const isSame = sut.isSame(referenceDate, comparisonDate)

    expect(isSame).toBe(false)
  })

  it('should validate isBefore to be true', async () => {
    const referenceDate = new Date(2023, 10, 1)
    const comparisonDate = new Date(2023, 10, 2)

    const isAfter = sut.isBefore(referenceDate, comparisonDate)

    expect(isAfter).toBe(true)
  })

  it('should validate isBefore to be false', async () => {
    const referenceDate = new Date(2023, 10, 2)
    const comparisonDate = new Date(2023, 10, 1)

    const isBefore = sut.isBefore(referenceDate, comparisonDate)

    expect(isBefore).toBe(false)
  })
})
