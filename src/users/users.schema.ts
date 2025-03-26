import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Review } from 'src/reviews/review.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [String], required: false })
  orders: string[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Review' }], require: false })
  reviews: MongooseSchema.Types.ObjectId[];

}

export const UserSchema = SchemaFactory.createForClass(User);
