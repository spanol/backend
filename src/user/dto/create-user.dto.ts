import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Cpf } from 'src/decorators/cpf.decorator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
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
