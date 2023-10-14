import { Module } from '@nestjs/common'
import { PuppeteerService } from './puppeteer/puppeteer.service'
import { RoomsService } from '@/domain/application/services/rooms-service'
import { PuppeteerRoomsService } from './puppeteer/services/puppeteer-rooms-service'
import { EnvModule } from '../env/env.module'

@Module({
  imports: [EnvModule],
  providers: [
    PuppeteerService,
    {
      provide: RoomsService,
      useClass: PuppeteerRoomsService,
    },
  ],
  exports: [PuppeteerService, RoomsService],
})
export class CrawlerModule {}
