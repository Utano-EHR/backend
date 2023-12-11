import {
  fs,
  path,
  argon,
  Injectable,
  DatabaseService,
} from './index';

@Injectable()
export class UserSeed {
  constructor(private readonly db: DatabaseService) {}
  async seed() {
    const filePath = path.join(
      __dirname,
      '../../src/db_json/users.json',
    );
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const user of users) {
      const { password, ...rest } = user;
      await this.db.user.create({
        data: {
          password: await argon.hash(password),
          ...rest,
        },
      });
    }

    console.log('Users data seeded successfully');
  }
}
