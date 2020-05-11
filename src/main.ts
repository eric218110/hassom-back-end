import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server';
import { Logger } from '@nestjs/common';
import { Env } from './provider/env.provider';
import { ExpressAdapter } from '@nestjs/platform-express';
import { corsMiddleware } from './middleware/cors';

async function bootstrap() {
  Env.init();
  const PORT = process.env.PORT || 1995;
  const app = await NestFactory.create(ServerModule, new ExpressAdapter());
  app.enableCors(corsMiddleware);
  await app
    .listen(PORT)
    .then(() => {
      Logger.log(`Mode: ${process.env.MODE}`, 'ServerFactory');
      Logger.log(`Server running in port ${PORT}`, 'ServerFactory');
    })
    .catch(error =>
      Logger.error(`Error in application: ${error}`, 'ServerFactory'),
    );
}
bootstrap();
