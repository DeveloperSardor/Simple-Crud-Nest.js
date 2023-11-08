import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';

@Module({
  imports: [NewsModule],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
  exports : []
})
export class AppModule {}
