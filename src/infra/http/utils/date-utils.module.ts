import { Module } from '@nestjs/common'
import { DateFormatter } from '@/domain/application/utils/date-formatter'
import { DateValidator } from '@/domain/application/utils/date-validator'

import { DateUtils } from './date-utils'

@Module({
  providers: [
    {
      provide: DateFormatter,
      useClass: DateUtils,
    },
    {
      provide: DateValidator,
      useClass: DateUtils,
    },
  ],
  exports: [DateFormatter, DateValidator],
})
export class DateUtilsModule {}
