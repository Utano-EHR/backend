import { Appointment } from '@prisma/client';
import { CoreEntity } from 'src/common/entities';
import { Hospital } from 'src/hospital/entities/hospital.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import { Prescription } from 'src/prescription/entities/prescription.entity';
import { User } from 'src/user/entities/user.entity';

export class Consultation extends CoreEntity {
  doctor_id: number;
  doctor: User;
  patient_id: number;
  patient: Patient;
  hospital_id: number;
  hospital: Hospital;
  appointment_id: number;
  appointment: Appointment;
  observations: string;
  prescription: Prescription;
}
