/**
 * @author Eric Silva
 * @export ImageController
 * @interface ImageController
 */

import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Delete,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { IController } from '../../common/controller.interface';
import { ImagesEntity } from 'src/database/entitys/images.entity';

@Controller('image')
export class ImageController implements IController<ImagesEntity> {
  constructor(private readonly imageService: ImageService) {}

  @Get(':id')
  async index(@Param('id') id: string): Promise<ImagesEntity> {
    return await this.imageService.index(id);
  }

  @Get()
  async show(): Promise<ImagesEntity[]> {
    return await this.imageService.show();
  }

  @Post()
  async create(@Body() createDTO: ImagesEntity): Promise<ImagesEntity> {
    return await this.imageService.create(createDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDTO: ImagesEntity,
  ): Promise<{}> {
    return await this.imageService.update(id, updateDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{}> {
    return await this.imageService.delete(id);
  }
}
