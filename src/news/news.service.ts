import { Injectable } from '@nestjs/common';
import { NewsDto } from './dto/news.dto';

@Injectable()
export class NewsService {
    news : NewsDto[];

    constructor() {
        this.news = [
           {
               _id : 1,
               title : "First new",
               description : "Description",
               createdAt : new Date(),
               type_new : "image",
               updatedAt : new Date()        
           }
        ]
       }
    async getAllNews(){
        return this.news
    }

    async createNews(dto : NewsDto){
        const data : NewsDto = {
            _id : new Date().getTime(),
            ...dto
          }
          return [...this.news, data]
    }

    async getById(_id : string){
    return this.news.find(el=>el._id == _id)
    }

    async patch(_id : string, dto : NewsDto){
    let currentNew = this.news.find(el=>el._id == _id)
   currentNew = dto;
   return currentNew
    }

    async delete(_id : string){
        return this.news.filter(el=> el._id !=_id )
    }
}
