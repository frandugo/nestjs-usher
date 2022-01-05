import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChurchesController } from './controllers/churches.controller';
import { ChurchesService } from './services/churches.service';

import { Church, ChurchSchema } from './entities/church.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Church.name,
        schema: ChurchSchema,
      },
    ]),
  ],
  controllers: [ChurchesController],
  providers: [ChurchesService],
})
export class ChurchesModule {}
