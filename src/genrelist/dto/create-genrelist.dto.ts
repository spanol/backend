import { IsInt } from 'class-validator';

export class CreateGenrelistDto {
  @IsInt()
  gameId: number;

  @IsInt()
  genreId: number;
}
