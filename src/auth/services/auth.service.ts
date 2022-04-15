import { Injectable } from '@nestjs/common';
import { UsersService } from './../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
  }
}
