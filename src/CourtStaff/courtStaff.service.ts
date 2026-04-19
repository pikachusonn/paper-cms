import { Injectable } from '@nestjs/common';
import { CourtStaffRepository } from './courtStaff.repository.js';

@Injectable()
export class CourtStaffService {
  constructor(private readonly courtStaffRepository: CourtStaffRepository) {}

  async findById(id: string) {
    return await this.courtStaffRepository.findById(id);
  }
}
