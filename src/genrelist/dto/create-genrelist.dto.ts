import { IsInt } from "class-validator";
import { Genrelist } from "../entities/genrelist.entity";

export class CreateGenrelistDto extends Genrelist {
  @IsInt()
  GenreId:number;

  @IsInt()
  GameId:number;
}
