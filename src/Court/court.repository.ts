import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service.js';
import { DocumentStatus, Role } from '@prisma/client';
import { CreateDocumentInput } from 'src/interface/court.js';

@Injectable()
export class CourtRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboardStats(year: number) {
    // 1. Xác định khoảng thời gian của năm (Từ 1/1 đến 31/12)
    const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${year}-12-31T23:59:59.999Z`);
    const now = new Date();

    // 2. Lấy danh sách Tòa án kèm theo việc đếm số liệu (Dùng Relation Count của Prisma)
    // Đây là kỹ thuật tối ưu: Lấy court và đếm luôn document bên trong chỉ bằng 1 lệnh
    const courts = await this.prisma.court.findMany({
      where: { isDeleted: false },
      include: {
        _count: {
          select: {
            documents: {
              where: {
                receivedDate: { gte: startDate, lte: endDate }, // Chỉ tính văn bản nhận trong năm này
                // Bạn có thể thêm điều kiện status nếu cần đếm tổng
              },
            },
          },
        },
        // Lấy danh sách document để tự tính toán chi tiết (Waiting/Overdue) trong code
        // Lưu ý: Nếu dữ liệu quá lớn (triệu bản ghi) thì nên dùng Raw Query, còn vài nghìn thì cách này vẫn nhanh và an toàn.
        documents: {
          where: {
            receivedDate: { gte: startDate, lte: endDate },
            status: { not: DocumentStatus.CONFIRMED }, // Chỉ quan tâm cái chưa xong
          },
          select: {
            status: true,
            dueDate: true,
          },
        },
      },
      orderBy: { courtNumber: 'asc' }, // Sắp xếp theo mã tòa
    });

    // 3. Tính toán số liệu từ dữ liệu thô vừa lấy
    let totalWaiting = 0;
    let totalOverdue = 0;

    const formattedCourts = courts.map((court) => {
      // Đếm số chờ xử lý của tòa này
      const waiting = court.documents.filter(
        (d) => d.status === DocumentStatus.WAITING,
      ).length;

      // Đếm số quá hạn/đến hạn (Chưa xong VÀ Hạn <= Hiện tại)
      const overdue = court.documents.filter(
        (d) =>
          d.status !== DocumentStatus.COMPLETED &&
          d.status !== DocumentStatus.CONFIRMED &&
          new Date(d.dueDate) <= now,
      ).length;

      // Cộng dồn vào tổng
      totalWaiting += waiting;
      totalOverdue += overdue;

      return {
        id: court.id,
        name: court.name,
        address: court.address,
        waitingCount: waiting,
        overdueCount: overdue,
      };
    });

    // 4. Đếm nhân sự (Lấy toàn hệ thống hoặc theo logic riêng)
    const totalStaff = await this.prisma.account.count({
      where: { role: Role.STAFF },
    });

    // Đếm thư ký (Tạm thời mock hoặc đếm distinct tên thư ký trong bảng Document nếu cần)
    // Ở đây mình đếm Admin tạm, hoặc trả về số cố định nếu chưa có định nghĩa Thư ký trong DB
    const totalSecretary = await this.prisma.account.count({
      where: { role: Role.ADMIN },
    });

    return {
      totalWaiting,
      totalOverdue,
      totalStaff,
      totalSecretary,
      courts: formattedCourts,
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
