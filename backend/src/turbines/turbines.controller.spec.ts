import { Test, TestingModule } from '@nestjs/testing';
import { TurbinesController } from './turbines.controller.js';
import { TurbinesService } from './turbines.service.js';

describe('TurbinesController', () => {
  let controller: TurbinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurbinesController],
      providers: [TurbinesService],
    }).compile();

    controller = module.get<TurbinesController>(TurbinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
