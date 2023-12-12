import { Injectable } from '@nestjs/common';
import { CreateAdmissionDto } from './dto/create-admission.dto';
import { UpdateAdmissionDto } from './dto/update-admission.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AdmissionService {
  constructor(private readonly db: DatabaseService) {}
  async create(dto: CreateAdmissionDto) {
    const admission = await this.db.admission.create({
      data: { ...dto },
      include: {
        patient: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            date_of_birth: true,
            national_id: true,
            mother_national_id: true,
            father_national_id: true,
            insurance_id: true,
            allergies: true,
            blood_group: true,
          },
        },
      },
    });
    return {
      success: true,
      message: 'admission created successfully!',
      data: { admission },
    };
  }

  async findAll() {
    const admissions = await this.db.admission.findMany();
    return {
      success: true,
      message: 'all admissions found!',
      data: {
        admissions,
      },
    };
  }

  async findOne(id: number) {
    const admission = await this.db.admission.findFirst({
      where: {
        id,
      },
      include: {
        patient: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            date_of_birth: true,
            national_id: true,
            mother_national_id: true,
            father_national_id: true,
            insurance_id: true,
            allergies: true,
            blood_group: true,
          },
        },
      },
    });
    return {
      success: true,
      message: 'admission found!',
      data: {
        admission,
      },
    };
  }

  async update(id: number, dto: UpdateAdmissionDto) {
    const admission = await this.db.admission.update({
      where: {
        id,
      },
      include: {
        patient: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            date_of_birth: true,
            national_id: true,
            mother_national_id: true,
            father_national_id: true,
            insurance_id: true,
            allergies: true,
            blood_group: true,
          },
        },
      },
      data: { ...dto },
    });
    return {
      success: true,
      message: 'admission updated!',
      data: {
        admission,
      },
    };
  }

  async remove(id: number) {
    const admission = await this.db.admission.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'admission deleted!',
      data: {
        admission,
      },
    };
  }
}
