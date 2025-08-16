import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import {
  ReservationDocument,
  ReservationScheme,
} from './reservations/models/reservation.schema';
import { ReservationsRepostiory } from './reservations.repository';

@Module({
  imports: [
    DatabaseModule,
    LoggerModule,
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
