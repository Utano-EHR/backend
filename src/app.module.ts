import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalModule } from './hospital/hospital.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SpecialityModule } from './speciality/speciality.module';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PatientModule } from './patient/patient.module';
import { InsuranceModule } from './insurance/insurance.module';
import { SeederModule } from './scripts/seeder.module';
import { FetcherModule } from './fetcher/fetcher.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    HospitalModule,
    AuthModule,
    CityModule,
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
    InsuranceModule,
    SeederModule,
    FetcherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
