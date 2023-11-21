import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-http';

@Injectable()
export class DoctorsStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string): Promise<{}> {
    // TODO: Implement your own validation logic here
    return { username };
  }
}
