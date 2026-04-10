
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { imovelService } from './imoveis/imovel.service';
import { ImovelController } from './imoveis/imovel.controller';

@Controller()
export class AppController {
  imovelService: any;
  constructor(
  ) {}

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<ImovelController> {
    return this.imovelService.post({ id: Number(id) });
  }

  @Get('feed')
  async getPublishedPosts(): Promise<ImovelController[]> {
    return this.imovelService.posts({
      where: { published: true },
    });
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<ImovelController[]> {
    return this.imovelService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('post')
  async createDraft(
    @Body() postData: { descricao: string; dataCompra?: Date; endereco: string },
  ): Promise<ImovelController> {
    const { descricao, dataCompra, endereco } = postData;
    return this.imovelService.createPost({
      descricao,
      dataCompra,
      endereco,
    });
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<ImovelController> {
    return this.imovelService.createUser(ImovelController);
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<ImovelController> {
    return this.imovelService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<ImovelController> {
    return this.imovelService.deletePost({ id: Number(id) });
  }
}
