import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NewsDto } from './dto/news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @HttpCode(200)
  @Get()
  async getAllNews() {
    return this.newsService.getAllNews();
  }

  @HttpCode(200)
  @Get(':_id')
  async getById(@Param('_id') _id: string) {
    return this.newsService.getById(_id);
  }

  @HttpCode(201)
  @Post()
  async AddNews(@Body() dto: NewsDto) {
    return this.newsService.createNews(dto);
  }

  @HttpCode(200)
  @Patch(':_id')
  async update(@Param('_id') _id: string, @Body() dto: NewsDto) {
    return this.newsService.patch(_id, dto);
  }

  @HttpCode(200)
  @Delete(':_id')
  async delete(@Param('_id') _id: string) {
    return this.newsService.delete(_id);
  }
}
