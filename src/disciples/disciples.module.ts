import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DisciplesController } from './controllers/disciples.controller';
import { DisciplesService } from './services/disciples.service';

import { Disciple, DiscipleSchema } from './entities/disciple.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Disciple.name,
        schema: DiscipleSchema,
      },
    ]),
  ],
  controllers: [DisciplesController],
  providers: [DisciplesService],
})
export class DisciplesModule {}
