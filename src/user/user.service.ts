import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    let users = await this.db.user.findMany({
      include: {
        hospital: true,
        nationality: true,
        speciality: true,
        consultations: true,
        appointments: true,
        prescriptions: true,
      },
    });
    users = users.map((u) => {
      delete u.password;
      return u;
    });

    return {
      success: true,
      message: 'all users found!',
      data: {
        users,
      },
    };
  }

  async findOne(id: number) {
    const user = await this.db.user.findFirst({
      where: {
        id,
      },
      include: {
        hospital: true,
        nationality: true,
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
        nationality: true,
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
