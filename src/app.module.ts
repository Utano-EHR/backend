import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalModule } from './hospital/hospital.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';
import { ProvinceModule } from './province/province.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SpecialityModule } from './speciality/speciality.module';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    HospitalModule,
    AuthModule,
    CityModule,
    ProvinceModule,
    DatabaseModule,
    SpecialityModule,
    CommonModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1d',
      },
    }),
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
