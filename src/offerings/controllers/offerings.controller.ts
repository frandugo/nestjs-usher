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

import { OfferingsService } from './../services/offerings.service';
import { CreateOfferingDto, UpdateOfferingDto } from './../dtos/offering.dto';

import { MongoIdPipe } from './../../common/mongo-id.pipe';

@Controller('offerings')
export class OfferingsController {
  constructor(private offeringsService: OfferingsService) {}

  @Get()
  findAll() {
    return this.offeringsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', MongoIdPipe) id: string) {
    return this.offeringsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateOfferingDto) {
    return this.offeringsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateOfferingDto,
  ) {
    return this.offeringsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.offeringsService.remove(id);
  }
}
