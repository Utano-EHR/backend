import { Module } from '@nestjs/common';
import { FetcherService } from './fetcher.service';
import { FetcherController } from './fetcher.controller';

@Module({
  controllers: [FetcherController],
  providers: [FetcherService],
})
export class FetcherModule {}
