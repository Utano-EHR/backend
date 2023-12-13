import { Injectable } from '@nestjs/common';
import { CreateChronicconditionDto } from './dto/create-chroniccondition.dto';
import { UpdateChronicconditionDto } from './dto/update-chroniccondition.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ChronicconditionService {
  constructor(private readonly db: DatabaseService) {}
  async create(dto: CreateChronicconditionDto) {
    try {
      const chroniccondition = await this.db.chronicCondition.create({
        data: {
          ...dto,
          slug: dto.name.toLowerCase().replace(/\s/g, '-'),
        },
      });
      return {
        success: true,
        message: 'chronic condition registered successfully!',
        data: { chroniccondition },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async findAll() {
    try {
      const chronicconditions =
        await this.db.chronicCondition.findMany();
      return {
        success: true,
        message: 'all chronic conditions found!',
        data: {
          chronicconditions,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const chroniccondition =
        await this.db.chronicCondition.findFirst({
          where: {
            id,
          },
        });

      return {
        success: true,
        message: 'chronic condition found!',
        data: {
          chroniccondition,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async update(id: number, dto: UpdateChronicconditionDto) {
    try {
      const chroniccondition = await this.db.chronicCondition.update({
        where: {
          id,
        },
        data: {
          ...dto,
          slug: dto.name.toLowerCase().replace(/\s/g, '-'),
        },
      });
      return {
        success: true,
        message: 'chronic condition updated!',
        data: {
          chroniccondition,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const chroniccondition = await this.db.chronicCondition.delete({
        where: {
          id,
        },
      });
      return {
        success: true,
        message: 'chronic condition deleted!',
        data: {
          chroniccondition,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
