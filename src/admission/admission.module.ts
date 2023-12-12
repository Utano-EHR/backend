import { Module } from '@nestjs/common';
import { AdmissionService } from './admission.service';
import { AdmissionController } from './admission.controller';

@Module({
  controllers: [AdmissionController],
  providers: [AdmissionService],
})
export class AdmissionModule {}
