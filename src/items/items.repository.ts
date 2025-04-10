import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Items } from './items.schema';

@Injectable()
export class ItemsRepository {
  constructor(@InjectModel('Items') private model: Model<Items>) {}

  create(data: any) {
    return new this.model(data).save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, data: any) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
