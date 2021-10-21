import { IsEmail, isNotEmpty, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { Gamelist } from "src/gamelist/entities/gamelist.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { User } from "../entities/user.entity";
import { Cpf } from 'src/decorators/cpf.decorator';
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";
import { Type } from "class-transformer";

export class CreateUserDto implements User {
@IsNotEmpty()
@IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Cpf()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @ValidateNested()
  @Type(() => CreateProfileDto)
  profile: CreateProfileDto;
}

