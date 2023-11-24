import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class HospitalService {
  constructor(private readonly db: DatabaseService) {}

  async create(dto: CreateHospitalDto) {
    const { city, ...restDto } = dto;
    const data = {
      ...restDto,
      slug: dto.name.toLowerCase().replace(/ /g, '-'),
      city: {
        connect: {
          slug: city.toLowerCase().replace(/ /g, '-'),
        },
      },
    };
    await this.db.hospital.create({ data });
    return {
      success: true,
      message: 'Hospital created successfully',
    };
  }

  findAll() {
    return `This action returns all hospital`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hospital`;
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return `This action updates a #${id} hospital`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospital`;
  }
}
