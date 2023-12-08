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

  /**
   * Update Hospital Record
   * @param id
   * @param dto
   * @returns
   */
  async update(id: number, dto: UpdateHospitalDto) {
    if (dto.name) {
      dto.slug = dto.name.toLowerCase().replace(/ /g, '-');
    }
    const hospital = await this.db.hospital.update({
      where: {
        id,
      },
      data: dto,
    });

    return {
      success: true,
      message: 'hospital record updated!',
      data: { hospital },
    };
  }

  async remove(id: number) {
    const hospital = await this.db.hospital.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'hospital record deleted succesfully!',
      data: { hospital },
    };
  }
}
