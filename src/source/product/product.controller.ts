/**
 * @author Eric Silva
 * @export ProductController
 * @interface ProductController
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
import { ProductService } from './product.service';
import { IController } from '../../common/controller.interface';
import { ProductEntity } from 'src/database/entitys/product.entity';

@Controller('product')
export class ProductController implements IController<ProductEntity> {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async index(@Param('id') id: string): Promise<ProductEntity> {
    return await this.productService.index(id);
  }

  @Get('category/:id')
  async getProductCategory(@Param('id') id: string): Promise<ProductEntity[]> {
    return await this.productService.getProductCategory(id);
  }

  @Get()
  async show(): Promise<ProductEntity[]> {
    return await this.productService.show();
  }

  @Post()
  async create(@Body() createDTO: ProductEntity): Promise<ProductEntity> {
    return await this.productService.create(createDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDTO: ProductEntity,
  ): Promise<{}> {
    return await this.productService.update(id, updateDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{}> {
    return await this.productService.delete(id);
  }
}
