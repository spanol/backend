import { IsInt } from 'class-validator';

export class CreateGamelistDto {
  @IsInt()
  userId: number;

  @IsInt()
  gameId: number;
}
