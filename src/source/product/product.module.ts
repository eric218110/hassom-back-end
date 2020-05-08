import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/module/database.module';
import { productProviders } from './product.provider';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  imports: [DatabaseModule],
  providers: [...productProviders, ProductService],
})
export class ProductModule {}
