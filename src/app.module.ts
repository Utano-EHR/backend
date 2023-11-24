import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalModule } from './hospital/hospital.module';
import { DoctorModule } from './doctor/doctor.module';
import { ReceptionistModule } from './receptionist/receptionist.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';
import { ProvinceModule } from './province/province.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SpecialityModule } from './speciality/speciality.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    HospitalModule,
    DoctorModule,
    ReceptionistModule,
    AuthModule,
    CityModule,
    ProvinceModule,
    DatabaseModule,
    SpecialityModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
