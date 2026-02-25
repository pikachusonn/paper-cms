import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourtService } from './court.service.js';
import { UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RolesGuard } from '../guard/roles.guard.js';
import { Roles } from '../decorator/roles.decorator.js';
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';

@Resolver('Court')
export class CourtResolver {
  constructor(private readonly courtService: CourtService) {}

  // --- 1. QUERY ---

  @Query('dashboardStats')
  @UseGuards(JwtAuthGuard)
  async dashboardStats(
    @Args('year') year: number,
    @Args('searchCourt') searchCourt?: string, // Thêm tham số search
  ) {
    return await this.courtService.getDashboardStats(year, searchCourt);
  }

  @Query('courts')
  @UseGuards(JwtAuthGuard)
  async courts() {
    return await this.courtService.findAll();
  }

  @Query('court')
  @UseGuards(JwtAuthGuard)
  async court(@Args('id') id: string) {
    return await this.courtService.findById(id);
  }

  // --- 2. MUTATION (QUẢN TRỊ VIÊN) ---

  @Mutation('createCourt')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // 👮 Chỉ Admin được tạo tòa mới
  async createCourt(@Args('input') input: any) {
    return await this.courtService.createCourt(input);
  }

  @Mutation('createCourtOfficial')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // 👮 Chỉ Admin được thêm nhân sự vào tòa
  async createCourtOfficial(@Args('input') input: any) {
    return await this.courtService.createCourtOfficial(input);
  }
}
