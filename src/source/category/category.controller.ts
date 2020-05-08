/**
 * @author Eric Silva
 * @export CategoryController
 * @interface CategoryController
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
import { CategoryService } from './category.service';
import { IController } from '../../common/controller.interface';
import { CategoryEntity } from '../../database/entitys/category.entity';

@Controller('category')
export class CategoryController implements IController<CategoryEntity> {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':id')
  async index(@Param('id') id: string): Promise<CategoryEntity> {
    return await this.categoryService.index(id);
  }

  @Get()
  async show(): Promise<CategoryEntity[]> {
    return await this.categoryService.show();
  }

  @Post()
  async create(@Body() createDTO: CategoryEntity): Promise<CategoryEntity> {
    return await this.categoryService.create(createDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDTO: CategoryEntity,
  ): Promise<{}> {
    return await this.categoryService.update(id, updateDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{}> {
    return await this.categoryService.delete(id);
  }
}
