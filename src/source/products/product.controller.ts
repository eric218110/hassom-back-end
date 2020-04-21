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
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './products.service';
import { IController } from '../../global/instance/controller.interface';

@Controller('product')
export class ProductController implements IController<ProductDTO> {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async index(@Param('id') id: string): Promise<ProductDTO> {
    return await this.productService.index(id);
  }

  @Get()
  async show(): Promise<ProductDTO[]> {
    return await this.productService.show();
  }

  @Post()
  async create(@Body() createDTO: ProductDTO): Promise<ProductDTO> {
    return await this.productService.create(createDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDTO: ProductDTO,
  ): Promise<{}> {
    return await this.productService.update(id, updateDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{}> {
    return await this.productService.delete(id);
  }
}
