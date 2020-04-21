import { Injectable } from '@nestjs/common';
import { IService } from '../../global/instance/service.interface';
import { ProductDTO } from './dto/product.dto';
import { ProductRepository } from './Product.repository';
import { Exception } from 'src/global/error/exception';
import { ResponseInstance } from 'src/global/response';

@Injectable()
export class ProductService implements IService<ProductDTO> {
  constructor(private readonly productRepository: ProductRepository) {}
  async index(id: string): Promise<ProductDTO> {
    try {
      return await this.productRepository.findOne(id);
    } catch (error) {
      throw new Exception().index(id);
    }
  }

  async show(): Promise<ProductDTO[]> {
    try {
      return await this.productRepository.find();
    } catch (error) {
      throw new Exception().show(`Not values`);
    }
  }

  async create(createDTO: ProductDTO): Promise<ProductDTO> {
    try {
      return await this.productRepository.save(createDTO);
    } catch (error) {
      throw new Exception().create(
        `Not create registration = ${createDTO.cod}`,
      );
    }
  }

  async update(id: string, updateDTO: ProductDTO): Promise<{}> {
    try {
      const result = await this.productRepository.update(id, updateDTO);
      if (result.affected >= 0) {
        return new ResponseInstance(id, updateDTO).update();
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
        return new ResponseInstance(id).delete();
      } else {
        throw new Exception().delete('Not delete');
      }
    } catch (error) {
      throw new Exception().delete('Not delete');
    }
  }
}
