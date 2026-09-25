import { Module } from '@nestjs/common';
import { TurbineCatalogService } from './turbine-catalog.service.js';
import { TurbineCatalogController } from './turbine-catalog.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurbineCatalog } from './entities/turbine-catalog.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([TurbineCatalog])],
  controllers: [TurbineCatalogController],
  providers: [TurbineCatalogService],
})
export class TurbineCatalogModule { }
