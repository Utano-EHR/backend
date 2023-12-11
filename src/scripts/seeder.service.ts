import { Injectable } from '@nestjs/common';
import { ProvinceSeed } from './seed.provinces';
import { CitySeed } from './seed.cities';
import { InsuranceSeed } from './seed.insurance';
import { SpecialitySeed } from './seed.specialities';
import { ChronicConditionSeed } from './seed.chronic_conditions';
import { NationalitySeed } from './seed.nationalities';
import { HospitalSeed } from './seed.hospitals';
import { UserSeed } from './seed.users';
import { RoleSeed } from './seed.roles';

@Injectable()
export class SeederService {
  constructor(
    private readonly provinceSeed: ProvinceSeed,
    private readonly insuranceSeed: InsuranceSeed,
    private readonly specialitySeed: SpecialitySeed,
    private readonly citySeed: CitySeed,
    private readonly chronicConditionSeed: ChronicConditionSeed,
    private readonly nationalitySeed: NationalitySeed,
    private readonly hospitalSeed: HospitalSeed,
    private readonly userSeed: UserSeed,
    private readonly roleSeed: RoleSeed,
  ) {}
  async seedAll() {
    const seedArray = [
      this.provinceSeed,
      this.insuranceSeed,
      this.chronicConditionSeed,
      this.specialitySeed,
      this.citySeed,
      this.nationalitySeed,
      this.hospitalSeed,
      this.roleSeed,
      this.userSeed,
    ];

    for (const seed of seedArray) {
      await seed.seed();
    }
  }
}
