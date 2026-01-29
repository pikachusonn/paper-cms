import { Injectable } from '@nestjs/common';
import { CourtRepository } from './court.repository.js';
import { CourtFilter } from '../graphql.js';

@Injectable()
export class CourtService {
  constructor(private readonly courtRepository: CourtRepository) {}

  async findAll(courtFilter: CourtFilter) {
    return await this.courtRepository.findAll(courtFilter);
  }
}
