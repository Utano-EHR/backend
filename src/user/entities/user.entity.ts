import {
  Appointment,
  Consultation,
  Hospital,
  Prescription,
  Speciality,
} from '@prisma/client';
import { CoreEntity } from 'src/common/entities';
import { USER_ROLE } from '@prisma/client';

export class User extends CoreEntity {
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  national_id: string;
  nationality: string;
  role: USER_ROLE;
  hospital_id?: number;
  hospital?: Hospital;
  speciality_id?: number;
  speciality?: Speciality;
  consultations: Consultation[];
  appointments: Appointment[];
  prescriptions: Prescription[];
}
