import { Test, TestingModule } from '@nestjs/testing';
import { imovelService } from './imovel.service';

describe('UserService', () => {
  let service: imovelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [imovelService],
    }).compile();

    service = module.get<imovelService>(imovelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
