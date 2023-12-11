import { PartialType } from '@nestjs/mapped-types';
import { CreateFetcherDto } from './create-fetcher.dto';

export class UpdateFetcherDto extends PartialType(CreateFetcherDto) {}
