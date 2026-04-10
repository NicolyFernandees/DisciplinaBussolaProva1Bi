
import { Module } from '@nestjs/common';
import { ImovelController } from 'src/imoveis/imovel.controller';
import { imovelService } from 'src/imoveis/imovel.service';

@Module({
  controllers: [ImovelController],
  providers: [imovelService],
})
export class ImovelModule {}
