import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ImovelModule } from 'src/config/prisma.modules';
import { ImovelController } from 'src/imoveis/imovel.controller';
import { imovelService } from 'src/imoveis/imovel.service';

@Module({
  imports: [
    ImovelModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [imovelService],
  controllers: [ImovelController],
  exports: [imovelService],
})
export class AuthModule {}
