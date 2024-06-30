import { Module } from '@nestjs/common';
import { SealService } from './seal.service';
import { SealController } from './seal.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SEAL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://admin:password@localhost:5672'],
          queue: 'alarm_queue',
        },
      }
  ]),
  ],
  controllers: [SealController],
  providers: [SealService],
})
export class SealModule {}
