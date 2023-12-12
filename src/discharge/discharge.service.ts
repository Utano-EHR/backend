import { Injectable } from '@nestjs/common';
import { CreateDischargeDto } from './dto/create-discharge.dto';
import { UpdateDischargeDto } from './dto/update-discharge.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class DischargeService {
  constructor(private readonly db: DatabaseService) {}
  async create(dto: CreateDischargeDto) {
    dto.date ? (dto.date = new Date(dto.date)) : undefined;
    const discharge = await this.db.discharge.create({
      data: { ...dto },
      include: {
        form: true,
        admission: true,
      },
    });
    return {
      success: true,
      message: 'Discharge registered successfully!',
      data: { discharge },
    };
  }

  async findAll() {
    const discharges = await this.db.discharge.findMany();
    return {
      success: true,
      message: 'all discharges found!',
      data: {
        discharges,
      },
    };
  }

  async findOne(id: number) {
    const discharge = await this.db.discharge.findFirst({
      where: {
        id,
      },
      include: {
        form: true,
        admission: true,
      },
    });
    return {
      success: true,
      message: 'discharge found!',
      data: {
        discharge,
      },
    };
  }

  async update(id: number, dto: UpdateDischargeDto) {
    dto.date ? (dto.date = new Date(dto.date)) : undefined;
    const discharge = await this.db.discharge.update({
      where: {
        id,
      },
      data: { ...dto },
      include: {
        form: true,
        admission: true,
      },
    });
    return {
      success: true,
      message: 'discharge updated!',
      data: {
        discharge,
      },
    };
  }

  async remove(id: number) {
    const discharge = await this.db.discharge.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'discharge deleted!',
      data: {
        discharge,
      },
    };
  }
}
