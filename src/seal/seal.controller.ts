import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SealService } from './seal.service';
import { CreateSealDto } from './dto/create-seal.dto';
import { UpdateSealDto } from './dto/update-seal.dto';

@Controller('seal')
export class SealController {
  constructor(private readonly sealService: SealService) {}

  @Post()
  create(@Body() createSealDto: CreateSealDto) {
    return this.sealService.create(createSealDto);
  }

  @Get()
  findAll() {
    return this.sealService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sealService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSealDto: UpdateSealDto) {
    return this.sealService.update(+id, updateSealDto);
  }
}
