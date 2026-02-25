import { Injectable } from '@nestjs/common';
import { CourtRepository } from './court.repository.js';

@Injectable()
export class CourtService {
  constructor(private readonly courtRepository: CourtRepository) {}

  // --- 1. QUERY (Lấy dữ liệu) ---

  async findAll() {
    return await this.courtRepository.findAll();
  }

  async findById(id: string) {
    return await this.courtRepository.findById(id);
  }

  async getDashboardStats(year: number, searchCourt?: string) {
    return await this.courtRepository.getDashboardStats(year, searchCourt);
  }

  // --- 2. MUTATION (Tạo dữ liệu) ---

  async createCourt(input: any) {
    return await this.courtRepository.createCourt(input);
  }

  async createCourtOfficial(input: any) {
    return await this.courtRepository.createCourtOfficial(input);
  }
}
