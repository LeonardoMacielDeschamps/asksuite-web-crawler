import { AppModule } from '@/infra/app.module'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import dayjs from 'dayjs'

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
    const tomorrowDate = dayjs().add(1, 'day')
    const tomorrowDatePlusThreeDays = tomorrowDate.add(3, 'days')

    const response = await request(app.getHttpServer())
      .post('/search')
      .send({
        checkin: tomorrowDate.format('YYYY-MM-DD'),
        checkout: tomorrowDatePlusThreeDays.format('YYYY-MM-DD'),
      })

    expect(response.statusCode).toBe(200)

    if (response.body.length > 0) {
      const expectedArray = response.body.map(() => {
        return {
          name: expect.any(String),
          description: expect.any(String),
          price: expect.any(String),
          image: expect.any(String),
        }
      })

      expect(response.body).toEqual(expect.arrayContaining(expectedArray))
    }
  })
})
