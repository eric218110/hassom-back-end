import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from '../../database/entity/product.entity';

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {}
