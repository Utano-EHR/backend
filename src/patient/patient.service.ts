import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PatientService {
  constructor(private readonly db: DatabaseService) {}
  async create(dto: CreatePatientDto) {
    dto.email = dto.email.toLowerCase();
    dto.date_of_birth = new Date(dto.date_of_birth);
    const data = { ...dto };

    const patient = await this.db.patient.create({
      data,
    });
    return {
      success: true,
      message: 'Patient registered successfully!',
      data: { patient },
    };
  }

  async findAll() {
    const patients = this.db.patient.findMany({
      include: {
        appointments: true,
        consultations: true,
        chronic_conditions: true,
        prescriptions: true,
        observations: true,
        insurance: true,
        admissions: true,
      },
    });
    return {
      success: true,
      message: 'all patients found!',
      data: {
        patients,
      },
    };
  }

  async findOne(id: number) {
    const patient = await this.db.patient.findFirst({
      where: {
        id,
      },
      include: {
        appointments: true,
        consultations: true,
        chronic_conditions: true,
        prescriptions: true,
        observations: true,
        insurance: true,
        admissions: true,
      },
    });
    return {
      success: true,
      message: 'patient found!',
      data: { patient },
    };
  }

  /**
   * Update Patient Record
   * @param id
   * @param dto
   * @returns
   */
  async update(id: number, dto: UpdatePatientDto) {
    const { allergies, ...data } = dto;
    const updatedPatient = await this.db.patient.update({
      where: {
        id,
      },
      data: {
        ...data,
        allergies: allergies
          ? {
              push: allergies,
            }
          : undefined,
      },
      include: {
        appointments: true,
        consultations: true,
        chronic_conditions: true,
        prescriptions: true,
        observations: true,
        insurance: true,
        admissions: true,
      },
    });
    return {
      success: true,
      message: 'patient updated successfully!',
      data: { patient: updatedPatient },
    };
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
