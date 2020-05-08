import { Injectable, Inject } from '@nestjs/common';
import { IService } from '../../common/service.interface';
import { Exception } from '../../provider/error';
import { ResponseProvider } from '../../provider/response.provider';
import { ProductEntity } from 'src/database/entitys/product.entity';
import { REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService implements IService<ProductEntity> {
  constructor(
    @Inject(REPOSITORY.PRODUCT)
    private productRepository: Repository<ProductEntity>,
  ) {}
  async index(id: string): Promise<ProductEntity> {
    try {
      return await this.productRepository.findOne(id);
    } catch (error) {
      throw new Exception().index(id);
    }
  }

  async getProductCategory(categoryId: string): Promise<ProductEntity[]> {
    try {
      return await this.productRepository.find({
        where: { category: categoryId },
      });
    } catch (error) {
      throw new Exception().show(`Not values`);
    }
  }

  async show(): Promise<ProductEntity[]> {
    try {
      return await this.productRepository.find();
    } catch (error) {
      throw new Exception().show(`Not values`);
    }
  }

  async create(createDTO: ProductEntity): Promise<ProductEntity> {
    try {
      return await this.productRepository.save(createDTO);
    } catch (error) {
      throw new Exception().create(
        `Not create registration = ${createDTO.barcode}`,
        error,
      );
    }
  }

  async update(id: string, updateDTO: ProductEntity): Promise<{}> {
    try {
      const result = await this.productRepository.update(id, updateDTO);
      if (result.affected >= 0) {
        return new ResponseProvider(id, updateDTO).update();
      } else {
        throw new Exception().update('Not Update');
      }
    } catch (error) {
      throw new Exception().update('Not Update');
    }
  }

  async delete(id: string): Promise<{}> {
    try {
      const result = await this.productRepository.delete(id);
      if (result.affected >= 0) {
        return new ResponseProvider(id).delete();
      } else {
        throw new Exception().delete('Not delete');
      }
    } catch (error) {
      throw new Exception().delete('Not delete');
    }
  }
}
