import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Offering extends Document {
  @Prop({ required: true, unique: true })
  quantity: string;

  @Prop({ required: true, index: true })
  address: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  church: string;
}

export const OfferingSchema = SchemaFactory.createForClass(Offering);
