import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const user = await this.db.user.findFirst({
      where: {
        id,
      },
      include: {
        hospital: true,
        speciality: true,
        consultations: true,
        appointments: true,
        prescriptions: true,
      },
    });
    delete user.password;
    return {
      success: true,
      message: 'user found!',
      data: { user },
    };
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.db.user.update({
      where: {
        id,
      },
      data: dto,
      include: {
        hospital: true,
        speciality: true,
        consultations: true,
        appointments: true,
        prescriptions: true,
      },
    });
    delete user.password;
    return {
      success: true,
      message: 'user record updated successfully!',
      data: { user },
    };
  }

  async remove(id: number) {
    const user = await this.db.user.delete({
      where: {
        id,
      },
    });
    delete user.password;
    return {
      success: true,
      message: 'user record deleted successfully!',
      data: { user },
    };
  }
}
