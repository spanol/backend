import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenrelistService } from './genrelist.service';
import { CreateGenrelistDto } from './dto/create-genrelist.dto';
import { UpdateGenrelistDto } from './dto/update-genrelist.dto';

@Controller('genrelist')
export class GenrelistController {
  constructor(private readonly genrelistService: GenrelistService) {}

  @Post()
  create(@Body() createGenrelistDto: CreateGenrelistDto) {
    return this.genrelistService.create(createGenrelistDto);
  }

  @Get()
  findAll() {
    return this.genrelistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genrelistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGenrelistDto: UpdateGenrelistDto,
  ) {
    return this.genrelistService.update(+id, updateGenrelistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genrelistService.remove(+id);
  }
}
