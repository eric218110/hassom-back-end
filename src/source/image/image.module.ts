import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/module/database.module';
import { imageProviders } from './image.provider';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
  controllers: [ImageController],
  imports: [DatabaseModule],
  providers: [...imageProviders, ImageService],
})
export class ImageModule {}
