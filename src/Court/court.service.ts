import { Injectable, NotFoundException } from '@nestjs/common';
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

  async updateCourtOfficial(input: any) {
    const { id, ...data } = input;

    // Kiểm tra xem nhân sự có tồn tại không
    const exists = await this.courtRepository.findOfficialById(id);
    if (!exists || exists.isDeleted) {
      throw new NotFoundException('Nhân sự không tồn tại hoặc đã bị xóa');
    }

    return await this.courtRepository.updateCourtOfficial(id, data);
  }

  async deleteCourtOfficial(id: string) {
    const exists = await this.courtRepository.findOfficialById(id);
    if (!exists || exists.isDeleted) {
      throw new NotFoundException('Nhân sự không tồn tại hoặc đã bị xóa');
    }

    await this.courtRepository.deleteCourtOfficial(id);
    return true; // Trả về true cho GraphQL (Boolean!)
  }
}
