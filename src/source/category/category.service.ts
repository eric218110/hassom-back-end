import { Injectable, Inject } from '@nestjs/common';
import { IService } from '../../common/service.interface';
import { Exception } from '../../provider/error';
import { ResponseProvider } from '../../provider/response.provider';
import { CategoryEntity } from 'src/database/entitys/category.entity';
import { REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService implements IService<CategoryEntity> {
  constructor(
    @Inject(REPOSITORY.CATEGORY)
    private productRepository: Repository<CategoryEntity>,
  ) {}
  async index(id: string): Promise<CategoryEntity> {
    try {
      return await this.productRepository.findOne(id);
    } catch (error) {
      throw new Exception().index(id);
    }
  }

  async show(): Promise<CategoryEntity[]> {
    try {
      return await this.productRepository.find();
    } catch (error) {
      throw new Exception().show(`Not values`);
    }
  }

  async create(createDTO: CategoryEntity): Promise<CategoryEntity> {
    try {
      return await this.productRepository.save(createDTO);
    } catch (error) {
      throw new Exception().create(
        `Not create registration = ${createDTO.id}`,
        error,
      );
    }
  }

  async update(id: string, updateDTO: CategoryEntity): Promise<{}> {
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
