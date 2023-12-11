import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FetcherService {
  constructor(private readonly db: DatabaseService) {}
  async findAllRoles() {
    const roles = await this.db.role.findMany();
    return {
      success: true,
      message: 'all roles found!',
      data: { roles },
    };
  }

  async findAllNationalities() {
    const nationalities = await this.db.nationality.findMany();
    return {
      success: true,
      message: 'all nationalities found!',
      data: { nationalities },
    };
  }
}
