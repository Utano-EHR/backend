import { PickType } from '@nestjs/mapped-types';
import { Appointment } from '../entities/appointment.entity';

export class CreateAppointmentDto extends PickType(Appointment, [
  'date',
  'doctor_id',
  'patient_id',
]) {}
