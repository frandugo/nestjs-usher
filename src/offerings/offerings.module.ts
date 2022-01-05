import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OfferingsController } from './controllers/offerings.controller';
import { OfferingsService } from './services/offerings.service';

import { Offering, OfferingSchema } from './entities/offering.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Offering.name,
        schema: OfferingSchema,
      },
    ]),
  ],
  controllers: [OfferingsController],
  providers: [OfferingsService],
})
export class OfferingsModule {}
