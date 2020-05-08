import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/module/database.module';
import { photoProviders } from './photo.provider';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

@Module({
  controllers: [PhotoController],
  imports: [DatabaseModule],
  providers: [...photoProviders, PhotoService],
})
export class PhotoModule {}
