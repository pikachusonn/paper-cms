import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service.js';

@Resolver('AuthQuery')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // 🔴 THIS WAS MISSING
  @Query('auth')
  auth() {
    return {}; // must return an object
  }

  @ResolveField('accounts')
  accounts() {
    return this.authService.getAllAccount();
  }
}
