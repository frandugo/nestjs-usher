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

import { ChurchesService } from '../services/churches.service';
import {
  CreateChurchDto,
  UpdateChurchDto,
  AddUserToChurchDto,
} from '../dtos/church.dto';

import { MongoIdPipe } from '../../common/mongo-id.pipe';

@Controller('churches')
export class ChurchesController {
  constructor(private churchesService: ChurchesService) {}

  @Get()
  findAll() {
    return this.churchesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', MongoIdPipe) id: string) {
    return this.churchesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateChurchDto) {
    return this.churchesService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateChurchDto,
  ) {
    return this.churchesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.churchesService.remove(id);
  }

  @Delete(':id/user/:userId')
  removeUser(@Param('id') id: string, @Param('userId') userId: string) {
    return this.churchesService.removeUser(id, userId);
  }

  @Put(':id/users')
  addUsers(@Param('id') id: string, @Body() payload: AddUserToChurchDto) {
    return this.churchesService.addUsers(id, payload.usersIds);
  }
}
