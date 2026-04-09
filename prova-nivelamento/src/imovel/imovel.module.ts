import { Module } from '@nestjs/common';
import { imovelService } from './imovel.service';
import { ImovelController } from './imovel.controller';

@Module({
  controllers: [ImovelController],
  providers: [imovelService],
})
export class UserModule {}
