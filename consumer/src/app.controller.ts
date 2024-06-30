import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateSealDto } from './create-seal.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('alarm_queue')
  handleAlarm(@Payload() seal: CreateSealDto) {
    return this.appService.handleSendAlarm(seal);
  }
}
