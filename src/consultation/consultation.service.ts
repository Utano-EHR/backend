import { Injectable } from '@nestjs/common';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class ConsultationService {
  constructor(private readonly db: DatabaseService) {}
  async create(dto: CreateConsultationDto) {
    const consultation = await this.db.consultation.create({
      data: { ...dto },
      include: {
        appointment: true,
        doctor: true,
        patient: true,
      },
    });
    return {
      success: true,
      message: 'Consultation registered successfully!',
      data: { consultation },
    };
  }

  async findAll() {
    const consultaions = await this.db.consultation.findMany();
    return {
      success: true,
      message: 'all consultations found!',
      data: {
        consultaions,
      },
    };
  }

  async findOne(id: number) {
    const consultation = await this.db.consultation.findFirst({
      where: {
        id,
      },
      include: {
        appointment: true,
        doctor: true,
        patient: true,
      },
    });
    return {
      success: true,
      message: 'consultation found!',
      data: {
        consultation,
      },
    };
  }

  async update(id: number, dto: UpdateConsultationDto) {
    const consultation = await this.db.consultation.update({
      where: {
        id,
      },
      data: { ...dto },
      include: {
        appointment: true,
        doctor: true,
        patient: true,
      },
    });
    return {
      success: true,
      message: 'consultation updated!',
      data: {
        consultation,
      },
    };
  }

  async remove(id: number) {
    const consultation = await this.db.consultation.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'consultation deleted!',
      data: {
        consultation,
      },
    };
  }
}
