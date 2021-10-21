import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateGenrelistDto } from "src/genrelist/dto/create-genrelist.dto";
import { Genre } from "../entities/genre.entity";

export class CreateGenreDto extends Genre {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  genrelist?: CreateGenrelistDto[];
}
