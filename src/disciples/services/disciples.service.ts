import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Disciple } from '../entities/disciple.entity';
import { CreateDiscipleDto, UpdateDiscipleDto } from '../dtos/disciple.dto';

@Injectable()
export class DisciplesService {
  constructor(
    @InjectModel(Disciple.name) private discipleModel: Model<Disciple>,
  ) {}

  findAll() {
    return this.discipleModel.find().populate('evangelizer').exec();
  }

  async findOne(id: string) {
    // const product = await this.userModel.findById(id).populate('church').exec();
    const disciple = await this.discipleModel.findById(id).exec();
    if (!disciple) {
      throw new NotFoundException(`Disciple #${id} not found`);
    }
    return disciple;
  }

  create(data: CreateDiscipleDto) {
    const newDisciple = new this.discipleModel(data);
    return newDisciple.save();
  }

  update(id: string, changes: UpdateDiscipleDto) {
    const disciple = this.discipleModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!disciple) {
      throw new NotFoundException(`Disciple #${id} not found`);
    }
    return disciple;
  }

  remove(id: string) {
    return this.discipleModel.findByIdAndDelete(id);
  }

  //   async getOrderByUser(id: number) {
  //     const user = this.findOne(id);
  //     return {
  //       date: new Date(),
  //       user,
  //       products: await this.productsService.findAll(),
  //     };
  //   }
}
