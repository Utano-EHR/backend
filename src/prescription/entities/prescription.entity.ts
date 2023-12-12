import { Consultation, Patient, User } from '@prisma/client';
import { CoreEntity } from 'src/common/entities';

export class Prescription extends CoreEntity {
  drug: string;
  quantity: number;
  unit: string;
  dosage: string;
  frequency: string;
  consultation_id: number;
  consultation: Consultation;
  doctor_id: number;
  doctor: User;
  patient_id: number;
  patient: Patient;
}
