import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/module/database.module';
import { categoryProviders } from './category.provider';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  imports: [DatabaseModule],
  providers: [...categoryProviders, CategoryService],
})
export class CategoryModule {}
