import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server/server.module';
import { GlobalService } from './global/service';
import { Logger } from '@nestjs/common';
import { CoreSeeds } from './core/database/seeds';

GlobalService.initEnv();

const port = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  await app
    .listen(port)
    .then(() => {
      Logger.log(`Serve running in port: ${port}`, 'ServerLoader');
      new CoreSeeds().initSeeds();
    })
    .catch((error: Error) => {
      Logger.error(`Server error: ${error}`, 'ServerLoader');
    });
}
bootstrap();
