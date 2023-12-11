import { Controller, Get } from '@nestjs/common';
import { FetcherService } from './fetcher.service';

@Controller('fetcher')
export class FetcherController {
  constructor(private readonly fetcherService: FetcherService) {}

  @Get('nationalities')
  findAllNationalities() {
    return this.fetcherService.findAllNationalities();
  }

  @Get('roles')
  findAllRoles() {
    return this.fetcherService.findAllRoles();
  }
}
