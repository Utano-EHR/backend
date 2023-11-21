import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DoctorsStrategy } from './doctors.strategy';

@Module({
    imports: [PassportModule],
    providers: [DoctorsStrategy],
    exports: [DoctorsStrategy],
  })
  export class AuthModule {}
  