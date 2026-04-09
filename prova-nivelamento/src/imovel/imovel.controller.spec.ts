import { Test, TestingModule } from '@nestjs/testing';
import { ImovelController } from './imovel.controller';
import { imovelService } from './imovel.service';

describe('ImovelController', () => {
  let controller: ImovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImovelController],
      providers: [imovelService],
    }).compile();

    controller = module.get<ImovelController>(ImovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
