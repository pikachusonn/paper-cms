import { Args, Query, Resolver } from '@nestjs/graphql';
import { CourtService } from './court.service.js';
import type { CourtFilter } from 'src/graphql.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guard/jwtAuth.guard.js';

@Resolver()
export class CourtResolver {
  constructor(private readonly courtService: CourtService) {}

  @Query('courts')
  @UseGuards(JwtAuthGuard)
  async courts(@Args('courtFilter') courtFilter: CourtFilter) {
    return await this.courtService.findAll(courtFilter);
  }
}
