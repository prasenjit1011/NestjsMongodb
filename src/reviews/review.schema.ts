import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: false })
export class Review {
  @Prop({ required: true })
  userId: string;;

  @Prop({ required: true })
  productId: string;;

  @Prop({ required: true })
  remarks: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
