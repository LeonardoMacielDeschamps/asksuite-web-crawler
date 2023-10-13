import { Module } from '@nestjs/common'

import { CrawlerModule } from '../crawler/crawler.module'
import { DateUtilsModule } from './utils/date-utils.module'

import { FetchRoomsController } from './controllers/fetch-rooms.controller'

import { FetchRoomsUseCase } from '@/domain/application/use-cases/fetch-rooms'

@Module({
  imports: [CrawlerModule, DateUtilsModule],
  controllers: [FetchRoomsController],
  providers: [FetchRoomsUseCase],
})
export class HttpModule {}
