import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { User } from './../../users/entities/user.entity';

@Schema()
export class Church extends Document {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  shepherd: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: User.name }] })
  users: Types.Array<User>;
}

export const ChurchSchema = SchemaFactory.createForClass(Church);
