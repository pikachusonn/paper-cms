import { Args, Query, Resolver } from '@nestjs/graphql';
import { CourtService } from './court.service.js';
import { Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';
import { CreateDocumentInput } from 'src/interface/court.js';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator.js';

@Resolver()
export class CourtResolver {
  constructor(private readonly courtService: CourtService) {}

  @Query('dashboardStats')
  @UseGuards(JwtAuthGuard)
  async dashboardStats(@Args('year') year: number) {
    return await this.courtService.getDashboardStats(year);
  }

  @Mutation('createDocument')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.STAFF) // Chỉ ADMIN và USER mới được tạo văn bản
  async createDocument(@Args('input') input: CreateDocumentInput) {
    return await this.courtService.createDocument(input);
  }
}
