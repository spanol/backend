import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateGenrelistDto } from 'src/genrelist/dto/create-genrelist.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateGameDto {
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

  @IsString()
  @IsNotEmpty()
  trailerurl: string;

  @IsString()
  @IsNotEmpty()
  gameplayurl: string;

  @IsOptional()
  @IsInt()
  User?: CreateUserDto[];

  @IsOptional()
  @IsInt()
  Genre?: CreateGenrelistDto[];
}
