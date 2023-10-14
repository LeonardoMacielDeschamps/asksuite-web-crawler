import { Injectable } from '@nestjs/common'
import * as puppeteer from 'puppeteer'

@Injectable()
export class PuppeteerService {
  async fetchData<ReturnDataType>(
    url: string,
    evaluateCallback: puppeteer.EvaluateFunc<unknown[]>,
  ): Promise<ReturnDataType[]> {
    const browser = await puppeteer.launch({ headless: 'new' })

    const page = await browser.newPage()

    await page.goto(url)

    const result = await page.evaluate(evaluateCallback)

    await page.close()

    return result as ReturnDataType[]
  }
}
