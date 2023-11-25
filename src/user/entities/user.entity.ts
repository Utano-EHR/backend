import {
  Appointment,
  Consultation,
  Hospital,
  Prescription,
  Speciality,
} from '@prisma/client';
import { CoreEntity } from 'src/common/entities';

export class User extends CoreEntity {
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  nationality: string;
  hospital_id?: string;
  hospital?: Hospital;
  speciality_id?: string;
  speciality?: Speciality;
  consultations: Consultation[];
  appointments: Appointment[];
  prescriptions: Prescription[];
}
