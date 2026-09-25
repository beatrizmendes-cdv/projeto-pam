import { Module } from '@nestjs/common';
import { SimulationService } from './simulation.service.js';
import { SimulationController } from './simulation.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Simulation } from './entities/simulation.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Simulation])],
  controllers: [SimulationController],
  providers: [SimulationService],
})
export class SimulationModule { }
