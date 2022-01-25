import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { DisciplesService } from '../services/disciples.service';
import { CreateDiscipleDto, UpdateDiscipleDto } from '../dtos/disciple.dto';

import { MongoIdPipe } from './../../common/mongo-id.pipe';

@Controller('disciples')
export class DisciplesController {
  constructor(private disciplesService: DisciplesService) {}

  @Get()
  findAll() {
    return this.disciplesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', MongoIdPipe) id: string) {
    return this.disciplesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateDiscipleDto) {
    return this.disciplesService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateDiscipleDto,
  ) {
    return this.disciplesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.disciplesService.remove(id);
  }
}
