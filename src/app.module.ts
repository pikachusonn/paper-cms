import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Auth/auth.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AccountModule } from './Account/account.module.js';
import { CourtModule } from './Court/court.module.js';
import { DocumentModule } from './Document/document.module.js';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationCronService } from './Cron/notification-cron.service.js';
import { Prisma } from './generated/prisma/browser.js';
import { PrismaService } from './service/prisma.service.js';
import { NotificationModule } from './Notification/notification.module.js';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ScheduleModule.forRoot(),
    NotificationModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    AuthModule,
    AccountModule,
    CourtModule,
    DocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService, NotificationCronService, PrismaService],
})
export class AppModule {}
