import { Test, TestingModule } from '@nestjs/testing';
import { TurbineCatalogService } from './turbine-catalog.service.js';

describe('TurbineCatalogService', () => {
  let service: TurbineCatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TurbineCatalogService],
    }).compile();

    service = module.get<TurbineCatalogService>(TurbineCatalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
