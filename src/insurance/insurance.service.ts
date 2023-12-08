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

  findAll() {
    return `This action returns all insurance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insurance`;
  }

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
