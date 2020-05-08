import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  await app
    .listen(1995)
    .then(() => Logger.log(`Server running in port ${1995}`, 'ServerFactory'))
    .catch(error =>
      Logger.error(`Error in application: ${error}`, 'ServerFactory'),
    );
}
bootstrap();
