import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { ROLES_KEY } from '../decorator/roles.decorator.js'; // Sẽ tạo ở bước 3

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Xem API này yêu cầu quyền gì (lấy từ @Roles)
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Nếu không yêu cầu quyền gì -> Cho qua
    if (!requiredRoles) {
      return true;
    }

    // 2. Lấy User từ Context (User này do JwtStrategy trả về)
    const ctx = GqlExecutionContext.create(context);
    const { user } = ctx.getContext().req;

    // 3. So sánh: User có quyền đó không?
    if (!user) return false;
    return requiredRoles.some((role) => user.role === role);
  }
}
