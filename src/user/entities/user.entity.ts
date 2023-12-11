import {
  Appointment,
  Consultation,
  Hospital,
  Prescription,
  Speciality,
  Role,
  Nationality,
} from '@prisma/client';
import { CoreEntity } from 'src/common/entities';

export class User extends CoreEntity {
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  national_identity: string;
  nation_id: number;
  nationality: Nationality;
  role_id: number;
  role: Role;
  hospital_id?: number;
  hospital?: Hospital;
  speciality_id?: number;
  speciality?: Speciality;
  consultations: Consultation[];
  appointments: Appointment[];
  prescriptions: Prescription[];
}
