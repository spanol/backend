import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Profile } from "../entities/profile.entity";


export class CreateProfileDto extends Profile {
 
    @IsString()
    @IsNotEmpty()
    Title: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
