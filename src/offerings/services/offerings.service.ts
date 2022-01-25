import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Offering } from '../entities/offering.entity';
import { CreateOfferingDto, UpdateOfferingDto } from '../dtos/offering.dto';

@Injectable()
export class OfferingsService {
  constructor(
    @InjectModel(Offering.name) private OfferingModel: Model<Offering>,
  ) {}

  findAll() {
    return this.OfferingModel.find().populate('user').populate('church').exec();
  }

  async findOne(id: string) {
    const offering = await this.OfferingModel.findById(id).exec();
    if (!offering) {
      throw new NotFoundException(`Offering #${id} not found`);
    }
    return offering;
  }

  create(data: CreateOfferingDto) {
    const newOffering = new this.OfferingModel(data);
    return newOffering.save();
  }

  update(id: string, changes: UpdateOfferingDto) {
    const offering = this.OfferingModel.findByIdAndUpdate(
      id,
      { $set: changes },
      { new: true },
    ).exec();
    if (!offering) {
      throw new NotFoundException(`Offering #${id} not found`);
    }
    return offering;
  }

  remove(id: string) {
    return this.OfferingModel.findByIdAndDelete(id);
  }
}
