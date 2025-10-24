import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FindOneUserService } from 'src/modules/user/use-case/findOne/findOne.user.service';
import { UserLogin } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private findUser: FindOneUserService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: UserLogin): Promise<any> {
    const user = await this.findUser.findOne(data.email);
    if (user?.password !== data.password) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
