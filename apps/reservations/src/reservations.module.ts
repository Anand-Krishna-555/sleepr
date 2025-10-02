import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import {
  ReservationDocument,
  ReservationScheme,
} from './reservations/models/reservation.schema';
import { ReservationsRepostiory } from './reservations.repository';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    DatabaseModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule.forFeature([
      {
        name: ReservationDocument.name,
        schema: ReservationScheme,
      },
    ]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepostiory],
})
export class ReservationsModule {}
