import { Module } from '@nestjs/common';
import { CourtResolver } from './court.resolver.js';
import { CourtService } from './court.service.js';
import { CourtRepository } from './court.repository.js';
import { PrismaService } from '../service/prisma.service.js';

@Module({
  providers: [CourtResolver, CourtService, CourtRepository, PrismaService],
})
export class CourtModule {}
