import { Module } from '@nestjs/common';
import { GenrelistService } from './genrelist.service';
import { GenrelistController } from './genrelist.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GenrelistController],
  providers: [GenrelistService, PrismaService],
})
export class GenrelistModule {}
