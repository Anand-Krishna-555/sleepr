import { AbstractRepository } from '@app/common';
import { ReservationDocument } from './reservations/models/reservation.schema';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export abstract class ReservationsRepostiory extends AbstractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepostiory.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
  }
}
