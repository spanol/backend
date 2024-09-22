import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include = {
    genrelist: {
      select: {
        game: true,
      },
    },
  };

  async create(data: CreateGenreDto) {
    return this.prisma.genre.create({
      data: {
        name: data.name, // Cria o gênero com o nome
        genrelist: {
          create: data.games.map((gameId) => ({
            game: { connect: { id: gameId } }, // Conectando jogos à lista de gênero
          })),
        },
      },
    });
  }

  findAll() {
    return this.prisma.genre.findMany();
  }

  findOne(id: number) {
    return this.prisma.genre.findUnique({
      where: { id },
      // include: this._include,
    });
  }

  async update(id: number, data: UpdateGenreDto) {
    return this.prisma.genre.update({
      where: { id },
      // include: this._include,
      data: {
        name: data.name, // Atualiza o nome do gênero
      },
    });
  }

  remove(id: number) {
    return this.prisma.genre.delete({
      where: { id },
    });
  }
}
