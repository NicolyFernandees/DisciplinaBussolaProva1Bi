import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { imovelService } from './imovel.service';
import { CreateImovelDto } from './dto/create-imovel.dto';
import * as updateImovelDto from './dto/update-imovel.dto';

@Controller('user')
export class ImovelController {
  imovelService: any;
  constructor(private readonly userService: imovelService) {}

  @Post()
  create(@Body() createImovelDto: CreateImovelDto) {
    return this.imovelService.create(createImovelDto);
  }

  @Get()
  findAll() {
    return this.imovelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imovelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImovelDto: updateImovelDto.UpdateImovelDto) {
    return this.imovelService.update(+id, updateImovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imovelService.remove(+id);
  }
}
