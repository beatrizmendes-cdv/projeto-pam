import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }));


  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("PAM")
    .setDescription("Documentação e testes interativos dos endpoints de Simulação, Turbinas e Catálogo")
    .setVersion("1.0")
    .addTag("simulation", "gerenciamento de simulações")
    .addTag("turbines", "gerenciamento de turbinas")
    .addTag("turbines-catalog", "gerenciamento de catalogos")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document)
  await app.listen(process.env.PORT ?? 4000);
}
await bootstrap();
