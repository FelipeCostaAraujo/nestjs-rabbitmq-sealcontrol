import { Injectable } from '@nestjs/common';
import { CreateSealDto } from './create-seal.dto';

@Injectable()
export class AppService {
  handleSendAlarm(seal: CreateSealDto) {
    console.log(seal);
    // emissao de alerta sobre lacre violado
    return 'Hello World!';
  }
}
