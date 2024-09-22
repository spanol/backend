import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include = {
    genrelist: {
      select: {
        genre: true,
      },
    },
    gamelist: {
      select: {
        user: true,
      },
    },
  };

  create(data: CreateGameDto) {
    return this.prisma.game.create({
      include: this._include,
      data,
    });
  }

  findAll() {
    return this.prisma.game.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, data: UpdateGameDto) {
    return this.prisma.game.update({
      where: { id },
      include: this._include,
      data,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
