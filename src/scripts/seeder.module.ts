import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { ProvinceSeed } from './seed.provinces';
import { CitySeed } from './seed.cities';
import { InsuranceSeed } from './seed.insurance';
import { SpecialitySeed } from './seed.specialities';
import { ChronicConditionSeed } from './seed.chronic_conditions';
import { HospitalSeed } from './seed.hospitals';
import { DatabaseModule } from 'src/database/database.module';
import { NationalitySeed } from './seed.nationalities';
import { UserSeed } from './seed.users';
import { RoleSeed } from './seed.roles';

@Module({
  imports: [DatabaseModule],
  providers: [
    SeederService,
    ProvinceSeed,
    CitySeed,
    InsuranceSeed,
    SpecialitySeed,
    ChronicConditionSeed,
    HospitalSeed,
    NationalitySeed,
    UserSeed,
    RoleSeed,
  ],
})
export class SeederModule {}
