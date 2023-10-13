import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env/env'
import { HttpModule } from './http/http.module'
import { EnvModule } from './env/env.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: envSchema.parse,
      isGlobal: true,
    }),
    HttpModule,
    EnvModule,
  ],
})
export class AppModule {}
