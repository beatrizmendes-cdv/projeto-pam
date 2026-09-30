import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurbinesModule } from './turbines/turbines.module.js';
import { TurbineCatalogModule } from './turbine-catalog/turbine-catalog.module.js';
import { SimulationModule } from './simulation/simulation.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5433,
      username: process.env.DB_USERNAME || 'user_app',
      password: String(process.env.DB_PASSWORD || 'password_app'),
      database: process.env.DB_DATABASE || 'db_app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'server',
    }),
    TurbinesModule,
    TurbineCatalogModule,
    SimulationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
