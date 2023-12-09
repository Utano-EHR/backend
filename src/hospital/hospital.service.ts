import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class HospitalService {
  constructor(private readonly db: DatabaseService) {}

  async create(dto: CreateHospitalDto) {
    const { city_id, ...restDto } = dto;
    const data = {
      ...restDto,
      slug: dto.name.toLowerCase().replace(/ /g, '-'),
      city: {
        connect: {
          id: city_id,
        },
      },
    };
    const hospital = await this.db.hospital.create({ data });
    return {
      success: true,
      message: 'Hospital created successfully',
      data: {
        hospital,
      },
    };
  }

  async findAll() {
    const hospitals = await this.db.hospital.findMany();
    return {
      success: true,
      message: 'fetched all registered hospitals',
      data: {
        hospitals,
      },
    };
  }

  async findOne(id: number) {
    const hospital = await this.db.hospital.findFirst({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'fetched hospital',
      data: {
        hospital,
      },
    };
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
