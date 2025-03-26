import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDTO } from './order.dto';
import { User, UserDocument } from 'src/users/users.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async create(createOrderDto: CreateOrderDTO): Promise<Order> {
    const orderData = await this.orderModel.create(createOrderDto);
    const orderId   = orderData?._id?.toString();
    const userId    = orderData?.userId;

    const userData  = await this.userModel.findByIdAndUpdate(createOrderDto.userId, { $push: { orders: orderData._id } });

    

    console.clear();
    console.log(orderId, userId, createOrderDto.userId, userData);

    return orderData;

  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().select('_id userId products totalAmount status').exec();
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).select('_id userId products totalAmount status').exec();
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async update(id: string, updateOrderDto: CreateOrderDTO): Promise<Order|null> {
    return this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.orderModel.findByIdAndDelete(id).exec();
  }
}
