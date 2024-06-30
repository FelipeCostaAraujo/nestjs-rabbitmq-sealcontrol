import { Test, TestingModule } from '@nestjs/testing';
import { SealController } from './seal.controller';
import { SealService } from './seal.service';

describe('SealController', () => {
  let controller: SealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SealController],
      providers: [SealService],
    }).compile();

    controller = module.get<SealController>(SealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
