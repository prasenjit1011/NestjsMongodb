import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [String], required: true })
  images: string[];
  
  @Prop({ type: [String], required: false })
  reviews: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
