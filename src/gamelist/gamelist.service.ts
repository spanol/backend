import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGamelistDto } from './dto/create-gamelist.dto';
import { UpdateGamelistDto } from './dto/update-gamelist.dto';

@Injectable()
export class GamelistService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include = {
    user: {
      select: {
        name: true,
        UserId: true,
      },
    },
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
  };

  create(data: CreateGamelistDto) {
    return this.prisma.game_list.create({
      include: this._include,
      data: {
        user: {
          connect: { id: data.userId }, // Conectando o usuário pelo ID
        },
        game: {
          connect: { id: data.gameId }, // Conectando o jogo pelo ID
        },
      },
    });
  }

  findAll() {
    return this.prisma.game_list.findMany();
  }

  findOne(id: number) {
    return this.prisma.game_list.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateGamelistDto) {
    return this.prisma.game_list.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.game_list.delete({
      where: { id },
    });
  }
}
