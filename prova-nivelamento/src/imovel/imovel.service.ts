import { Injectable } from '@nestjs/common';
import { CreateImovelDto } from './dto/create-imovel.dto';
import * as updateImovelDto from './dto/update-imovel.dto';

@Injectable()
export class imovelService {
  create(createImovelDto: CreateImovelDto) {

    return 'Adicionado novo imovel';
  }

  findAll() {
    return `retorne todos imóveis`;
  }

  findOne(id: number) {
    return `retorne do #${id} do imóvel`;
  }

  update(id: number, updateUserDto: updateImovelDto.UpdateImovelDto) {
    return `Atualizado o #${id} do imovel`;
  }

  remove(id: number) {
    return `Removido o #${id} do imovel`;
  }
}
