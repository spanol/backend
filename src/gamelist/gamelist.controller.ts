import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GamelistService } from './gamelist.service';
import { CreateGamelistDto } from './dto/create-gamelist.dto';
import { UpdateGamelistDto } from './dto/update-gamelist.dto';

@Controller('gamelist')
export class GamelistController {
  constructor(private readonly gamelistService: GamelistService) {}

  @Post()
  create(@Body() createGamelistDto: CreateGamelistDto) {
    return this.gamelistService.create(createGamelistDto);
  }

  @Get()
  findAll() {
    return this.gamelistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamelistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGamelistDto: UpdateGamelistDto,
  ) {
    return this.gamelistService.update(+id, updateGamelistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamelistService.remove(+id);
  }
}
