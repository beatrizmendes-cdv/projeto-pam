import { Module } from '@nestjs/common';
import { TurbinesService } from './turbines.service.js';
import { TurbinesController } from './turbines.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turbine } from './entities/turbine.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Turbine])],
  controllers: [TurbinesController],
  providers: [TurbinesService],
})
export class TurbinesModule { }
