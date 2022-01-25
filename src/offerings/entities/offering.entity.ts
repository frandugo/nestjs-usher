import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { User } from '../../users/entities/user.entity';
import { Church } from '../../churches/entities/church.entity';

@Schema()
export class Offering extends Document {
  @Prop({ required: true })
  quantity: string;

  @Prop({ required: true, index: true })
  address: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Church' })
  church: Church | Types.ObjectId;
}

export const OfferingSchema = SchemaFactory.createForClass(Offering);
