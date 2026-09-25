import { Injectable } from '@nestjs/common';
import { CreateTurbineDto } from './dto/create-turbine.dto.js';
import { UpdateTurbineDto } from './dto/update-turbine.dto.js';

@Injectable()
export class TurbinesService {
  create(createTurbineDto: CreateTurbineDto) {
    return 'This action adds a new turbine';
  }

  findAll() {
    return `This action returns all turbines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} turbine`;
  }

  update(id: number, updateTurbineDto: UpdateTurbineDto) {
    return `This action updates a #${id} turbine`;
  }

  remove(id: number) {
    return `This action removes a #${id} turbine`;
  }
}
