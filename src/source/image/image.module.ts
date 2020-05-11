import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../../database/module/database.module';
import { imageProviders } from './image.provider';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ImageMiddleware } from '../../middleware/image.middleware';

@Module({
  controllers: [ImageController],
  imports: [DatabaseModule],
  providers: [...imageProviders, ImageService],
})
export class ImageModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ImageMiddleware)
      .forRoutes({ path: 'image/*', method: RequestMethod.POST });
  }
}
