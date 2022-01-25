import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { User } from '../../users/entities/user.entity';

@Schema()
export class Disciple extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone: number;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  evangelizer: User | Types.ObjectId;
}

export const DiscipleSchema = SchemaFactory.createForClass(Disciple);
