import { Module } from '@nestjs/common'
import { PuppeteerService } from './puppeteer/puppeteer.service'
import { RoomsRepository } from '@/domain/application/repositories/rooms-repository'
import { PuppeteerRoomsRepository } from './puppeteer/repositories/puppeteer-rooms-repository'
import { EnvModule } from '../env/env.module'

@Module({
  imports: [EnvModule],
  providers: [
    PuppeteerService,
    {
      provide: RoomsRepository,
      useClass: PuppeteerRoomsRepository,
    },
  ],
  exports: [PuppeteerService, RoomsRepository],
})
export class CrawlerModule {}
