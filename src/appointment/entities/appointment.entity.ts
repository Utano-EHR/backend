import { CoreEntity } from 'src/common/entities';
import { Patient } from 'src/patient/entities/patient.entity';
import { User } from 'src/user/entities/user.entity';

export class Appointment extends CoreEntity {
  date: Date;
  doctor_id: number;
  doctor: User;
  patient_id: number;
  patient: Patient;
  consultation: number;
}
