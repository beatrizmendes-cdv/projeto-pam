import { Test, TestingModule } from '@nestjs/testing';
import { TurbineCatalogController } from './turbine-catalog.controller.js';
import { TurbineCatalogService } from './turbine-catalog.service.js';

describe('TurbineCatalogController', () => {
  let controller: TurbineCatalogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurbineCatalogController],
      providers: [TurbineCatalogService],
    }).compile();

    controller = module.get<TurbineCatalogController>(TurbineCatalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
