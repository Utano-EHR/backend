import { Injectable } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PrescriptionService {
  constructor(private readonly db: DatabaseService) {}
  async create(dto: CreatePrescriptionDto) {
    const prescription = await this.db.prescription.create({
      data: { ...dto },
    });
    return {
      success: true,
      message: 'Prescription registered successfully!',
      data: { prescription },
    };
  }

  async findAll() {
    const prescriptions = this.db.prescription.findMany();
    return {
      success: true,
      message: 'all prescriptions found!',
      data: {
        prescriptions,
      },
    };
  }

  async findOne(id: number) {
    const prescription = await this.db.prescription.findFirst({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'prescription found!',
      data: {
        prescription,
      },
    };
  }

  async update(id: number, dto: UpdatePrescriptionDto) {
    const prescription = await this.db.prescription.update({
      where: {
        id,
      },
      data: { ...dto },
    });
    return {
      success: true,
      message: 'prescription updated!',
      data: {
        prescription,
      },
    };
  }

  async remove(id: number) {
    const prescription = await this.db.prescription.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'prescription deleted!',
      data: {
        prescription,
      },
    };
  }
}
