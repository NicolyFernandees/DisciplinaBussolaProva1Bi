
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { imovelService } from 'src/imoveis/imovel.service';

@Injectable()
export class AuthService {
  constructor(
    private imovelService: imovelService,
    private jwtService: JwtService
  ) {}

// async signIn(
// username: string,
// pass: string,
// ): Promise<{ access_token: string }> {
//  const user = this.imovelService.findOne(username);
// if (user?.password !== pass) {
//   throw new UnauthorizedException();
// }
//const payload = { sub: user.imovelId, username: user.username };
// return {
//   access_token: await this.jwtService.signAsync(payload),
// };
// 
//}
}
