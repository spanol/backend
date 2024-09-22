import { IsInt, IsOptional } from 'class-validator';

export class UpdateGenrelistDto {
  @IsOptional()
  @IsInt()
  gameId?: number;

  @IsOptional()
  @IsInt()
  genreId?: number;
}
