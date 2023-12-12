import { PickType } from '@nestjs/mapped-types';
import { Consultation } from '../entities/consultation.entity';

export class CreateConsultationDto extends PickType(Consultation, [
  'doctor_id',
  'patient_id',
  'hospital_id',
  'appointment_id',
  'observations',
]) {}
