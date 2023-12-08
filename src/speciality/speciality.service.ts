import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { CreateSpecialityDto } from './dto/create-speciality.dto';

@Injectable()
export class SpecialityService {
  constructor(private readonly db: DatabaseService) {}

  async create(dto: CreateSpecialityDto) {
    dto.slug = dto.name.toLowerCase().replace(/ /g, '-');
    const speciality = await this.db.speciality.create({
      data: dto,
    });
    return {
      success: true,
      message: 'specility created successfully',
      data: { speciality },
    };
  }

  findAll() {
    return `This action returns all speciality`;
  }

  async update(id: number, dto: UpdateSpecialityDto) {
    if (dto.name) {
      dto.slug = dto.name.toLowerCase().replace(/\s/g, '-');
    }
    const speciality = await this.db.speciality.update({
      where: {
        id,
      },
      data: dto,
    });
    return {
      success: true,
      message: 'speciality updated successfully!',
      data: { speciality },
    };
  }

  async remove(id: number) {
    const speciality = await this.db.speciality.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'speciality record deleted successfully!',
      data: { speciality },
    };
  }
}
