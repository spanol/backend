import { Module } from '@nestjs/common';
import { GamelistService } from './gamelist.service';
import { GamelistController } from './gamelist.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GamelistController],
  providers: [GamelistService,PrismaService]
})
export class GamelistModule {}
