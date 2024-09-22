import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsInt({ each: true })
  games: number[]; // Lista de IDs de jogos relacionados
}
