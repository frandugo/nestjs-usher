import { Module, HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';

import * as Joi from 'joi';

import { AppService } from './app.service';
import { ChurchesModule } from './churches/churches.module';
import { UsersModule } from './users/users.module';
import { OfferingsModule } from './offerings/offerings.module';
import { DatabaseModule } from './database/database.module';
import { DisciplesModule } from './disciples/disciples.module';

import { enviroments } from './enviroments';
import { AuthModule } from './auth/auth.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    HttpModule,
    ChurchesModule,
    UsersModule,
    DatabaseModule,
    OfferingsModule,
    DisciplesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
