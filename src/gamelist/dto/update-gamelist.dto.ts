import { PartialType } from '@nestjs/mapped-types';
import { CreateGamelistDto } from './create-gamelist.dto';

export class UpdateGamelistDto extends PartialType(CreateGamelistDto) {}
