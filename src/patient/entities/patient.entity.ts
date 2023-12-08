import {
  Admission,
  Appointment,
  ChronicCondition,
  Consultation,
  Height,
  Insurance,
  Observation,
  PatientLabTest,
  Prescription,
  Weight,
  BloodGroup,
} from '@prisma/client';
import { CoreEntity } from 'src/common/entities';

export class Patient extends CoreEntity {
  firstname: string;
  lastname: string;
  email: string;
  date_of_birth: Date;
  national_id: string;

  mother_national_id: string;
  father_national_id: string;

  heights: Height[];
  weight: Weight[];

  allergies: string[];
  chronic_conditions: ChronicCondition[];
  blood_group: BloodGroup;

  lab_tests: PatientLabTest[];

  insurance_id: number;
  insurance: Insurance;

  consultations: Consultation[];
  admissions: Admission[];
  appointments: Appointment[];
  prescriptions: Prescription[];
  observations: Observation[];
}
