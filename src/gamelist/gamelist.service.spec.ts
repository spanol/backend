import { Test, TestingModule } from '@nestjs/testing';
import { GamelistService } from './gamelist.service';

describe('GamelistService', () => {
  let service: GamelistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamelistService],
    }).compile();

    service = module.get<GamelistService>(GamelistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
