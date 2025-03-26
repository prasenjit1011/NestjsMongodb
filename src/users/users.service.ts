import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDTO): Promise<User> {
    const existingUser = await this.userModel.findOne({ email: createUserDto.email }).exec();

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
  
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().select('_id name email orders reviews').exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).select('_id name email orders reviews').exec();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, updateUserDto: CreateUserDTO): Promise<User|null> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
