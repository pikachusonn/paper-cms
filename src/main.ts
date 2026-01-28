import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { GqlGlobalExceptionFilter } from './exception/global-exception.filter.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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

  app.useGlobalFilters(new GqlGlobalExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
