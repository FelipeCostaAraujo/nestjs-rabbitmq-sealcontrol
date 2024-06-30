import { PartialType } from '@nestjs/mapped-types';
import { CreateSealDto } from './create-seal.dto';

export class UpdateSealDto extends PartialType(CreateSealDto) {}
