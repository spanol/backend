import { PartialType } from '@nestjs/mapped-types';
import { CreateGenrelistDto } from './create-genrelist.dto';

export class UpdateGenrelistDto extends PartialType(CreateGenrelistDto) {}
