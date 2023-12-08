import { Injectable } from '@nestjs/common';
import { ProvinceSeed } from './seed.provinces';
import { CitySeed } from './seed.cities';
import { InsuranceSeed } from './seed.insurance';
import { SpecialitySeed } from './seed.specialities';
import { ChronicConditionSeed } from './seed.chronic_conditions';

@Injectable()
export class SeederService {
  constructor(
    private readonly provinceSeed: ProvinceSeed,
    private readonly insuranceSeed: InsuranceSeed,
    private readonly specialitySeed: SpecialitySeed,
    private readonly citySeed: CitySeed,
    private readonly chronicConditionSeed: ChronicConditionSeed,
  ) {}
  async seedAll() {
    const seedArray = [
      this.provinceSeed,
      this.insuranceSeed,
      this.chronicConditionSeed,
      this.specialitySeed,
      this.citySeed,
    ];

    for (const seed of seedArray) {
      await seed.seed();
    }
  }
}
