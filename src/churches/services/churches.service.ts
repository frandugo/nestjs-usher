import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Church } from '../entities/church.entity';
import { CreateChurchDto, UpdateChurchDto } from '../dtos/church.dto';

@Injectable()
export class ChurchesService {
  constructor(@InjectModel(Church.name) private churchModel: Model<Church>) {}

  findAll() {
    return this.churchModel.find().populate('users').exec();
  }

  async findOne(id: string) {
    const product = await this.churchModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Church #${id} not found`);
    }
    return product;
  }

  create(data: CreateChurchDto) {
    const newProduct = new this.churchModel(data);
    return newProduct.save();
  }

  update(id: string, changes: UpdateChurchDto) {
    const product = this.churchModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  remove(id: string) {
    return this.churchModel.findByIdAndDelete(id);
  }

  async removeUser(id: string, userId: string) {
    const churches = await this.churchModel.findById(id);
    churches.users.pull(userId);
    return churches.save();
  }

  async addUsers(id: string, usersIds: string[]) {
    const church = await this.churchModel.findById(id);
    usersIds.forEach((pId) => church.users.push(pId));
    return church.save();
  }
}
