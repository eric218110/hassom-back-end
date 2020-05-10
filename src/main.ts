import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server';
import { Logger } from '@nestjs/common';
import { Env } from './provider/env.provider';

async function bootstrap() {
  Env.init();
  const PORT = process.env.PORT || 1995;
  const app = await NestFactory.create(ServerModule, { cors: true });
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
