import { Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import { CourtStaffRepository } from './courtStaff.repository.js';
import { CourtStaffService } from './courtStaff.service.js';
import { CourtStaffResolver } from './courtStaff.resolver.js';

@Module({
  providers: [
    PrismaService,
    CourtStaffRepository,
    CourtStaffService,
    CourtStaffResolver,
  ],
})
export class CourtStaffModule {}
