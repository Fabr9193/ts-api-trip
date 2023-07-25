import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { Flights } from './flights';
import { FlightsGateway } from './flights.gateway';

@Module({
  controllers: [FlightsController],
  providers: [Flights, FlightsGateway]
})
export class FlightsModule {}
