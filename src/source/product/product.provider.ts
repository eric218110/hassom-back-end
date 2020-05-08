import { Connection } from 'typeorm';
import { REPOSITORY } from 'src/constants';
import { IProviderApplication } from '../../common/provider.inteface';
import { ProductEntity } from 'src/database/entitys/product.entity';

const productProvider: IProviderApplication<ProductEntity> = {
  provide: REPOSITORY.PRODUCT,
  useFactory: (connection: Connection) =>
    connection.getRepository(ProductEntity),
  inject: [REPOSITORY.DATABASE],
};

export const productProviders = [productProvider];
