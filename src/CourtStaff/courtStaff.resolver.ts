import { Args, Query, Resolver } from '@nestjs/graphql';
import { CourtStaffService } from './courtStaff.service.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';

@Resolver('CourtStaff')
export class CourtStaffResolver {
  constructor(private readonly courtStaffService: CourtStaffService) {}

  @Query('courtStaff')
  @UseGuards(JwtAuthGuard)
  async getCourtStaffDetail(@Args('id') id: string) {
    return await this.courtStaffService.findById(id);
  }
}
