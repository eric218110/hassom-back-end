import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { getConnection, Repository } from 'typeorm';
import { Exception } from 'src/provider/error';
import { ProductEntity } from 'src/database/entitys/product.entity';

@Injectable()
export class ImageMiddleware implements NestMiddleware {
  private productRepository: Repository<ProductEntity>;

  async use(req: Request, res: Response, next: NextFunction) {
    const id = req.params[0];
    try {
      this.productRepository = getConnection().getRepository(ProductEntity);
      const product = await this.productRepository.findOne({ where: { id } });
      console.log(product);
      if (
        product.id !== undefined ||
        product.id !== null ||
        product.id !== ''
      ) {
        next();
      } else {
        throw Error('Product not exist');
      }
    } catch (error) {
      throw new Exception().create('Product not Exist');
    }
  }
}
