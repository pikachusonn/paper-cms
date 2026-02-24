import { Injectable } from '@nestjs/common';
import { CourtRepository } from './court.repository.js';
import { CreateDocumentInput } from 'src/interface/court.js';

@Injectable()
export class CourtService {
  constructor(private readonly courtRepository: CourtRepository) {}

  async getDashboardStats(year: number) {
    return await this.courtRepository.getDashboardStats(year);
  }

  async createDocument(data: CreateDocumentInput) {
    // Có thể thêm logic validate ngày tháng ở đây (VD: Hạn phải sau ngày nhận)
    if (
      data.receivedDate &&
      new Date(data.dueDate) < new Date(data.receivedDate)
    ) {
      // throw new BadRequestException('Hạn tống đạt không được nhỏ hơn ngày nhận!');
      // Tùy nghiệp vụ có chặt hay không
    }
    return await this.courtRepository.createDocument(data);
  }
}
