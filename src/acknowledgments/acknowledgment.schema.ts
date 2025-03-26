import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AcknowledgmentDocument = Acknowledgment & Document;

@Schema({ timestamps: false })
export class Acknowledgment {
  @Prop({ required: true })
  reviewId: string;

  @Prop({ required: true })
  response_msg: string;
}

export const AcknowledgmentSchema = SchemaFactory.createForClass(Acknowledgment);
