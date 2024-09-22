import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UpdateGenreDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  games?: number[]; // Lista de IDs de jogos relacionados
}
