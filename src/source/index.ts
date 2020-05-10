import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [CategoryModule, ProductModule, ImageModule],
})
export class MainModule {}
