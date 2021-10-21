import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Gamelist } from "src/gamelist/entities/gamelist.entity";
import { CreateGenrelistDto } from "src/genrelist/dto/create-genrelist.dto";
import { Genrelist } from "src/genrelist/entities/genrelist.entity";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { Game } from "../entities/game.entity";

export class CreateGameDto extends Game {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  gamecover: string;

  @IsDate()
  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  @IsString()
  nota: number;

  @IsString()
  @IsNotEmpty()
  trailer?: string;

  @IsString()
  @IsNotEmpty()
  gameplay?: string;

  @IsOptional()
  @IsInt()
  User?: CreateUserDto[];
  
  @IsOptional()
  @IsInt()
  Genre?: CreateGenrelistDto[];
}
