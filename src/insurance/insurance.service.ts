import { Injectable } from '@nestjs/common';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class InsuranceService {
  constructor(private readonly db: DatabaseService) {}
  async create(dto: CreateInsuranceDto) {
    dto.email = dto.email.toLowerCase();
    const slug = dto.name.toLowerCase().replace(/\s/g, '-');
    const insurance = await this.db.insurance.create({
      data: { ...dto, slug },
    });
    return {
      success: true,
      message: 'Insurance registered successfully!',
      data: { insurance },
    };
  }

  async findAll() {
    const insurances = await this.db.insurance.findMany();
    return {
      success: true,
      message: 'all insurances found!',
      data: {
        insurances,
      },
    };
  }

  async findOne(id: number) {
    const insurance = await this.db.insurance.findFirst({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'insurance found!',
      data: {
        insurance,
      },
    };
  }
  // 02058347

  async update(id: number, dto: UpdateInsuranceDto) {
    if (dto.name) {
      dto.slug = dto.name.toLowerCase().replace(/\s/g, '-');
    }
    const insurance = await this.db.insurance.update({
      where: {
        id,
      },
      data: dto,
    });
    return {
      success: true,
      message: 'insurance record updated successfully!',
      data: { insurance },
    };
  }

  async remove(id: number) {
    const insurance = await this.db.insurance.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'insurance record deleted successfully!',
      data: { insurance },
    };
  }
}
