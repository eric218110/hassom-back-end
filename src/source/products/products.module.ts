import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
