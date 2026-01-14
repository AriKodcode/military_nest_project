import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(createAuthDto: CreateAuthDto) {
    const user = await this.userService.findByMail(createAuthDto.email);
    if (user && (await bcrypt.compare(createAuthDto.password, user.password))) {
      const payload = {
        role: user.role,
        sub: user.id,
      };
      return { access_token: await this.jwtService.signAsync(payload) };
    }
    return null;
  }
}
