import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { ProvinceSeed } from './seed.provinces';
import { CitySeed } from './seed.cities';
import { InsuranceSeed } from './seed.insurance';
import { SpecialitySeed } from './seed.specialities';
import { ChronicConditionSeed } from './seed.chronic_conditions';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    SeederService,
    ProvinceSeed,
    CitySeed,
    InsuranceSeed,
    SpecialitySeed,
    ChronicConditionSeed,
  ],
})
export class SeederModule {}
