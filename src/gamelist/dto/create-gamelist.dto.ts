import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateGameDto } from "src/game/dto/create-game.dto";
import { Gamelist } from "../entities/gamelist.entity";

export class CreateGamelistDto extends Gamelist {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsOptional()
    GameId: number
}

