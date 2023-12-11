import { fs, path, Injectable, DatabaseService } from './index';

@Injectable()
export class RoleSeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/roles.json',
    );
    const roles = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const role of roles) {
      await this.db.role.create({
        data: {
          ...role,
          slug: role.name.toLowerCase().replace(/ /g, '-'),
        },
      });
    }

    console.log('Roles data seeded successfully');
  }
}
