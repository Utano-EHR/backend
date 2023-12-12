import { PickType } from '@nestjs/mapped-types';
import { Prescription } from '../entities/prescription.entity';

export class CreatePrescriptionDto extends PickType(Prescription, [
  'drug',
  'quantity',
  'unit',
  'dosage',
  'frequency',
  'consultation_id',
  'doctor_id',
  'patient_id',
]) {}
