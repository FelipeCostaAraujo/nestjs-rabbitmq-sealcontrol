import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSealDto } from './dto/create-seal.dto';
import { UpdateSealDto } from './dto/update-seal.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Seal } from './interfaces/seal.interface';

@Injectable()
export class SealService {

  constructor(@Inject('SEAL_SERVICE') private rabbitClient:ClientProxy){}

  private readonly seals:Seal[] = [];

  create(createSealDto: CreateSealDto) {
    console.log(createSealDto);
    const newSeal:Seal = {
      id: Math.random().toString(36).substring(2, 15),
      ...createSealDto
    }
    this.seals.push(newSeal);
    return `Seal created ${newSeal.id}`;
  }

  findAll() {
    return this.seals;
  }

  findOne(id: string) {
    const seal = this.seals.find(item => item.id === id);
    console.log(seal);
    console.log(seal.health);
    if (!seal) {
      throw new NotFoundException('Seal not found');
    }
    if (seal.health === 'Violado') {
      this.rabbitClient.emit('alarm_queue', seal);
      throw new ForbiddenException('Seal is broken');
    }
    return `This action returns a #${id} seal`;
  }

  update(id: String, updateSealDto: UpdateSealDto) {
    const index = this.seals.findIndex(item => item.id === id);
    if (index === -1) {
      throw new NotFoundException('Seal not found');
    }
    this.seals[index] = {
      ...this.seals[index],
      ...updateSealDto
    }
    return `This action updates a #${id} seal`;
  }
}
