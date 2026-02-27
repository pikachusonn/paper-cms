import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { createRequire } from 'module';
import { json, urlencoded } from 'express'; // 👈 Thêm import này

const require = createRequire(import.meta.url);
const { express: voyagerMiddleware } = require('graphql-voyager/middleware');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ limit: '100mb', extended: true }));

  app.enableCors({
    origin: ['http://localhost:3001'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown fields
      forbidNonWhitelisted: true, // throws if extra fields are sent
      transform: true, // transforms payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.use(
    '/voyager',
    voyagerMiddleware({
      endpointUrl: '/graphql',
    }),
  );

  // app.useGlobalFilters(new GqlGlobalExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
