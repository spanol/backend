import { Test, TestingModule } from '@nestjs/testing';
import { GenrelistService } from './genrelist.service';

describe('GenrelistService', () => {
  let service: GenrelistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenrelistService],
    }).compile();

    service = module.get<GenrelistService>(GenrelistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
