import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenrelistDto } from './dto/create-genrelist.dto';
import { UpdateGenrelistDto } from './dto/update-genrelist.dto';

@Injectable()
export class GenrelistService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    game: {
      select: {
        id: true,
        title: true,
        description: true,
        gamecover: true,
        year: true,
        nota: true,
        trailerurl: true,
        gameplayurl: true,
        gamelist: true,
        genrelist: true,
      },
    },
    genre: {
      select: {
        id: true,
        name: true,
        genrelist: true,
      },
    },
  };

  create(data: CreateGenrelistDto) {
    return this.prisma.genre_list.create({
      data: {
        // game: {
        //   connect: { id: data.gameId }, // Conectando o jogo ao gênero
        // },
        genre: {
          connect: { id: data.genreId }, // Conectando o gênero ao jogo
        },
      },
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.genre_list.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.genre_list.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, data: UpdateGenrelistDto) {
    return this.prisma.genre_list.update({
      where: { id },
      data: {
        // game: {
        //   connect: { id: data.gameId }, // Conectando o novo jogo ao gênero
        // },
        genre: {
          connect: { id: data.genreId }, // Conectando o novo gênero ao jogo
        },
      },
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.genre_list.delete({
      where: { id },
    });
  }
}
