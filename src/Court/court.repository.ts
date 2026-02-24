import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import { DocumentStatus, Role } from '@prisma/client';
import { CreateDocumentInput } from 'src/interface/court.js';

@Injectable()
export class CourtRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboardStats(year: number, searchCourt?: string) {
    // 1. Xác định phạm vi thời gian (Filter theo năm người dùng chọn)
    // Ví dụ: 2024 -> Từ 2024-01-01 đến 2024-12-31
    const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${year}-12-31T23:59:59.999Z`);
    const now = new Date(); // Dùng để tính logic quá hạn

    // 2. Query Tòa án + Kèm theo các văn bản TRONG NĂM ĐÓ
    const courts = await this.prisma.court.findMany({
      where: {
        isDeleted: false,
        // Nếu ở ngoài có ô tìm kiếm tên tòa án thì thêm dòng này
        name: searchCourt ? { contains: searchCourt } : undefined,
      },
      include: {
        documents: {
          where: {
            // 👇 QUAN TRỌNG: Chỉ lấy văn bản nhận trong năm được chọn
            receivedDate: {
              gte: startDate,
              lte: endDate,
            },
            // Loại bỏ những cái đã xác nhận (coi như xong hẳn, k tính vào tồn đọng)
            status: { not: DocumentStatus.CONFIRMED },
          },
          select: {
            status: true,
            dueDate: true,
          },
        },
      },
      orderBy: { courtNumber: 'asc' },
    });

    // 3. Tính toán số liệu (Loop qua kết quả đã lọc để cộng dồn)
    let totalWaiting = 0; // Tổng chưa tống đạt (Số to trên cùng)
    let totalOverdue = 0; // Tổng quá hạn (Số to trên cùng)

    const formattedCourts = courts.map((court) => {
      const docs = court.documents || [];

      // A. Đếm số "Chưa tống đạt" (Trong năm đó)
      const waitingCount = docs.filter(
        (d) => d.status === DocumentStatus.WAITING,
      ).length;

      // B. Đếm số "Đến hạn/Quá hạn" (Trong năm đó)
      // Logic: Chưa xong (Waiting/Completed chưa duyệt) VÀ Hạn < Hiện tại
      const overdueCount = docs.filter(
        (d) =>
          d.status !== DocumentStatus.CONFIRMED && new Date(d.dueDate) <= now,
      ).length;

      // Cộng dồn vào số liệu tổng của toàn hệ thống
      totalWaiting += waitingCount;
      totalOverdue += overdueCount;

      return {
        id: court.id,
        name: court.name,
        address: court.address,
        waitingCount, // Số liệu của riêng tòa này
        overdueCount, // Số liệu của riêng tòa này
      };
    });

    // 4. Các số liệu tĩnh khác (Nhân sự) - Cái này đếm toàn hệ thống k theo năm
    const totalStaff = await this.prisma.account.count({
      where: { role: Role.STAFF },
    });

    // Giả sử đếm Admin là Thư ký
    const totalSecretary = await this.prisma.account.count({
      where: { role: Role.ADMIN },
    });

    return {
      totalWaiting, // Trả về số to trên cùng
      totalOverdue, // Trả về số to trên cùng
      totalStaff,
      totalSecretary,
      courts: formattedCourts, // Danh sách bảng ở dưới
    };
  }

  async createDocument(data: CreateDocumentInput) {
    return await this.prisma.document.create({
      data: {
        court: { connect: { id: data.courtId } }, // Link với Tòa án
        docCode: data.docCode,
        docType: data.docType,
        recipient: data.recipient,
        address: data.address,

        // Xử lý ngày tháng (vì Input là String nên cần ép kiểu về Date)
        receivedDate: data.receivedDate
          ? new Date(data.receivedDate)
          : new Date(),
        dueDate: new Date(data.dueDate),

        deliveryMethod: data.deliveryMethod,
        responsiblePerson: data.responsiblePerson,
        content: data.content,

        // Các trường mặc định (Status=WAITING, Cost=0...) đã set trong Schema nên không cần điền
      },
    });
  }
}
