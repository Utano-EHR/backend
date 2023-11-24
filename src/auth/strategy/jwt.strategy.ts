import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DatabaseService } from 'src/database/database.service';

import { Doctor, Receptionist } from '@prisma/client';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private db: DatabaseService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: number; email: string }) {
    let user: Doctor | Receptionist;

    user = await this.db.doctor.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!user) {
      user = await this.db.receptionist.findUnique({
        where: {
          id: payload.sub,
        },
      });
    }

    delete user.password;
    return user;
  }
}
