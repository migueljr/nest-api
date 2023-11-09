import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from './criar-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Body() param: CreateCatDto) {
    return {
      id:2312454
    }
  }
}