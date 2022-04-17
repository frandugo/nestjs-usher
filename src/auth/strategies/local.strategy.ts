import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from './../services/auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(email: string, password: string) {
    const user = this.authService.validateUser(email, password);
    if (!user) {
      console.log('Erro cole pilas');
      throw new UnauthorizedException('You are not Allow');
    }
    console.log({ user });
    return user;
  }
}
