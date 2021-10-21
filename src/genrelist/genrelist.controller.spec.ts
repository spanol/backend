import { Test, TestingModule } from '@nestjs/testing';
import { GenrelistController } from './genrelist.controller';
import { GenrelistService } from './genrelist.service';

describe('GenrelistController', () => {
  let controller: GenrelistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenrelistController],
      providers: [GenrelistService],
    }).compile();

    controller = module.get<GenrelistController>(GenrelistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
