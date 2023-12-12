import { Attachment, Discharge } from '@prisma/client';
import { CoreEntity } from 'src/common/entities';
import { Patient } from 'src/patient/entities/patient.entity';

export class Admission extends CoreEntity {
  reason: string;
  form_id: number;
  form: Attachment;
  patient_id: number;
  patient: Patient;
  discharge: Discharge;
}
