import { Test, TestingModule } from '@nestjs/testing';
import { GamelistController } from './gamelist.controller';
import { GamelistService } from './gamelist.service';

describe('GamelistController', () => {
  let controller: GamelistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamelistController],
      providers: [GamelistService],
    }).compile();

    controller = module.get<GamelistController>(GamelistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
