import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder.module';
import { SeederService } from './seeder.service';

async function bootstrap() {
  const app =
    await NestFactory.createApplicationContext(SeederModule);
  const seeder = app.get(SeederService);

  await seeder.seedAll();

  await app.close();
}

bootstrap().catch((e) => {
  console.error('Error during seeding: ', e);
  process.exit(1);
});
