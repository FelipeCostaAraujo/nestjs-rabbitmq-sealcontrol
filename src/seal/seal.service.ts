import { Inject, Injectable } from '@nestjs/common';
import { CreateSealDto } from './dto/create-seal.dto';
import { UpdateSealDto } from './dto/update-seal.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SealService {

  constructor(@Inject('SEAL_SERVICE') private rabbitClient:ClientProxy){}

  create(createSealDto: CreateSealDto) {
    this.rabbitClient.emit('create_seal', createSealDto);
    return 'This action adds a new seal';
  }

  findAll() {
    return `This action returns all seal`;
  }

  findOne(id: number) {
    this.rabbitClient.emit('get_seal', id);
    return `This action returns a #${id} seal`;
  }

  update(id: number, updateSealDto: UpdateSealDto) {
    return `This action updates a #${id} seal`;
  }

  remove(id: number) {
    return `This action removes a #${id} seal`;
  }
}
