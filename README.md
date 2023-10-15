# 📦 Install

## Clone this repository
```bash
git clone https://github.com/LeonardoMacielDeschamps/asksuite-web-crawler
```

## Enter the project folder
```bash
cd asksuite-web-crawler
```

## Install dependencies
```bash
pnpm i

# or using npm
npm i

# or using yarn
yarn install
```

# ⚙️ Setting

## Environment
- You need to rename `.env.example` to `.env`

### Possible environment variables
- `PORT`:
  - Port on which the application will run. (example: localhost:`3333`)
  - This variable is optional and the default value is `3333`
- `BASE_URL_SCRAPING`: 
  - Website URL on which the crawler will request
  - This variable is mandatory

# 🤖 Automated Tests

## Run unit tests
- You can add `:watch` to run in watch mode
```bash
pnpm run test

# or using npm
npm run test

# or using yarn
yarn run test
```

## Run end-to-end tests
- You can add `:watch` to run in watch mode
```bash
pnpm run test:e2e

# or using npm
npm run test:e2e

# or using yarn
yarn run test:e2e
```

# 🪄 Usage
```bash
pnpm run start:dev

# or using npm
npm run start:dev

# or using yarn
yarn run start:dev
```

# 🚀 Routes
- You can use [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VSCode extension by opening `client.http` file and clicking `Send Request` or just use an API test tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to do the requests

  ## POST /search

    ### Expected body
    ```json
    {
      "checkin": "2023-10-25",
      "checkout": "2023-10-28"
    }
    ```

    ### Expected response
    - If you send an invalid date (`path` will describe the invalid field)
    ```json
    {
      "message": "Validation failed",
      "statusCode": 400,
      "errors": {
        "details": [
          {
            "code": "invalid_date",
            "path": [
              "checkin"
            ],
            "message": "Invalid date"
          }
        ],
        "name": "ZodValidationError"
      }
    }
    ```

    - If you send `checkin` with a date greater than `checkout`
    ```json
    {
      "message": "Check-in date cannot be greater than check-out date.",
      "error": "Bad Request",
      "statusCode": 400
    }
    ```

    - If passed all validations
    ```json
    [
      {
        "name": "Standard Jardim",
        "description": "No prédio principal do Resort, com varanda e vista para os jardins. Dispõe de uma cama de casal e uma cama de solteiro. Acomoda até 3 pessoas, nas opções de 1 adulto e 2 crianças (free até 12 anos) ou 2 adultos e 1 criança (free até 12 anos) ou 3 adultos. Sem cama extra. Inclui ingressos do Pratagy Acqua Park*. All inclusive com serviço de buffet.",
        "price": "R$  1.702,00",
        "image": "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/31/fotoprincipal.jpg"
      },
      {
        "name": "Suíte Família",
        "description": "Nos jardins do Resort e com varanda. Dispõe de duas camas de casal. Acomoda até 4 pessoas, nas opções de 1 adulto + 3 crianças (free até 12 anos) ou 2 adultos e 2 crianças (free até 12 anos) ou 3 adultos e 1 criança (free até 12 anos) ou 4 adultos. Sem cama extra. Inclui ingressos do Pratagy Acqua Park*. All inclusive com serviço de buffet.",
        "price": "R$  1.872,00",
        "image": "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/32/fotoprincipal.jpg"
      },
      {
        "name": "Suíte Família Superior",
        "description": "Próximo à praia e com varanda. Dispõe de duas camas de casal. Acomoda até 4 pessoas, nas opções de 1 adulto + 3 crianças (free até 12 anos) ou 2 adultos e 2 crianças (free até 12 anos) ou 3 adultos e 1 criança (free até 12 anos) ou 4 adultos. Sem cama extra. Inclui ingressos para o Pratagy Acqua Park*. All inclusive com serviço de buffet.",
        "price": "R$  2.104,50",
        "image": "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/61/fotoprincipal.jpg"
      },
      {
        "name": "Premium Class Vista Mar",
        "description": "All Inclusive Premium com serviço de mordomia e restaurante a la carte. Localizado na parte mais alta da Reserva Pratagy em ambiente com exclusividade. Acomoda até 02 adultos. Inclui ingressos do Pratagy Acqua Park para todos os dias.",
        "price": "R$  2.181,50",
        "image": "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/62/fotoprincipal.jpg"
      },
      {
        "name": "Premium Class Família",
        "description": "All Inclusive Premium com serviço de mordomia e restaurante a la carte. Localizado na parte mais alta da Reserva Pratagy em ambiente com exclusividade. Acomoda até 3 adultos ou 2 adultos e 1 criança (free até 12 anos) ou 1 adulto e 2 crianças (free até 12 anos). Inclui ingressos do Pratagy Acqua Park para todos os dias.",
        "price": "R$  2.382,50",
        "image": "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/63/fotoprincipal.jpg"
      },
      {
        "name": "Premium Class Refúgio",
        "description": "All Inclusive Premium com serviço de mordomia e restaurante a la carte. Acomodação única com paredes de vidro e banheira, localizada ao redor da mata na parte mais alta da Reserva Pratagy. Acomoda até 02 adultos. Inclui ingressos do Pratagy Acqua Park para todos os dias.",
        "price": "R$  2.630,00",
        "image": "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/64/fotoprincipal.jpg"
      }
    ]
    ```
# 🔨 Technologies adopted during application development

- <img src='https://nodejs.org/static/images/favicons/favicon.png' width='20' height='20'>
  <a href='https://nodejs.org/'>Node.js</a>

- <img src='https://pnpm.io/pt/img/favicon.png' width='20' height='20'>
  <a href='https://pnpm.io/'>pnpm</a>

- <img src='https://git-scm.com/favicon.ico' width='20' height='20'>
  <a href='https://git-scm.com/'>Git</a>

- <img src='https://github.githubassets.com/apple-touch-icon-144x144.png' width='20' height='20'>
  <a href='https://github.com/'>GitHub</a>

- <img src='https://github.githubassets.com/apple-touch-icon-144x144.png' width='20' height='20'>
  <a href='https://github.com/features/actions'>GitHub Actions</a>

- <img src='https://www.typescriptlang.org/favicon-32x32.png' width='20' height='20'>
  <a href='https://www.typescriptlang.org/'>TypeScript</a>

- <img src='https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg' width='20' height='20'>
  <a href='https://nestjs.com/'>NestJS</a>

- <img src='https://pptr.dev/img/favicon.ico' width='20' height='20'>
  <a href='https://pptr.dev/'>Puppeteer</a>

- <img src='https://vitest.dev/favicon.ico' width='20' height='20'>
  <a href='https://vitest.dev/'>Vitest</a>

- <img src='https://eslint.org/favicon.ico' width='20' height='20'>
  <a href='https://eslint.org/'>ESLint</a>

- <img src='https://fakerjs.dev/logo.svg' width='20' height='20'>
  <a href='https://fakerjs.dev/'>Faker</a>

- <img src='https://zod.dev/logo.svg' width='20' height='20'>
  <a href='https://zod.dev/'>Zod</a>

- <img src='https://day.js.org/img/favicon.ico' width='20' height='20'>
  <a href='https://day.js.org/'>Day.js</a>

- <img src='https://avatars.githubusercontent.com/u/30959108?s=48&v=4' width='20' height='20'>
  <a href='https://github.com/ladjs/supertest'>SuperTest</a>

# 📚 Knowledge applied during application development
- Clean Architecture
- SOLID
- Design Patterns
  - Factory Pattern
  - Service Pattern
  - Repository Pattern
- DDD (Domain-Driven Design)
- Test Automation Pyramid
  - End-to-end Tests
  - Integration Tests
  - Unit Tests
- Continuous Integration and Continuous Delivery (CI/CD)