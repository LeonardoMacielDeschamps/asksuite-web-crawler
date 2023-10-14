import { AppModule } from '@/infra/app.module'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Fetch rooms (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    await app.init()
  })

  test('[POST] /search', async () => {
    const response = await request(app.getHttpServer()).post('/search').send({
      checkin: '2023-10-25',
      checkout: '2023-10-28',
    })
    console.log(response)
    expect(response.statusCode).toBe(201)
  })
})
