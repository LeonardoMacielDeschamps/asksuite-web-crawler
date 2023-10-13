import { z } from 'zod'

export const envSchema = z.object({
  BASE_URL_SCRAPING: z.string(),
  PORT: z.coerce.number().optional().default(3333),
})

export type Env = z.infer<typeof envSchema>
