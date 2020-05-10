import { Injectable, Inject } from '@nestjs/common';
import { IService } from '../../common/service.interface';
import { Exception } from '../../provider/error';
import { ResponseProvider } from '../../provider/response.provider';
import { ImagesEntity } from 'src/database/entitys/images.entity';
import { REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService implements IService<ImagesEntity> {
  constructor(
    @Inject(REPOSITORY.IMAGE)
    private imageRepository: Repository<ImagesEntity>,
  ) {}
  async index(id: string): Promise<ImagesEntity> {
    try {
      return await this.imageRepository.findOne(id);
    } catch (error) {
      throw new Exception().index(id);
    }
  }

  async getProductCategory(categoryId: string): Promise<ImagesEntity[]> {
    try {
      return await this.imageRepository.find({
        where: { category: categoryId },
      });
    } catch (error) {
      throw new Exception().show(`Not values`);
    }
  }

  async show(): Promise<ImagesEntity[]> {
    try {
      return await this.imageRepository.find();
    } catch (error) {
      throw new Exception().show(`Not values`);
    }
  }

  async create(createDTO: ImagesEntity): Promise<ImagesEntity> {
    try {
      return await this.imageRepository.save(createDTO);
    } catch (error) {
      throw new Exception().create(
        `Not create registration = ${createDTO.id}`,
        error,
      );
    }
  }

  async update(id: string, updateDTO: ImagesEntity): Promise<{}> {
    try {
      const result = await this.imageRepository.update(id, updateDTO);
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
      const result = await this.imageRepository.delete(id);
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
