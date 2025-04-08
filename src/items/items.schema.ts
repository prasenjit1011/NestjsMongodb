import { Schema } from 'mongoose';

export const ItemsSchema = new Schema({
  name: String,
  description: String,
}, {
  timestamps: true
});

export interface Items {
  name: string;
  description: string;
}
