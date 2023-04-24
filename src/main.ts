import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static("."));

  const config = new DocumentBuilder().setTitle("Swagger").addBearerAuth().build(); //.addBearerAuth()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  app.enableCors();
  await app.listen(9090);
}
bootstrap();
