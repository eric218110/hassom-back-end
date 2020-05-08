import { Connection } from 'typeorm';
import { REPOSITORY } from 'src/constants';
import { IProviderApplication } from '../../common/provider.inteface';
import { CategoryEntity } from '../../database/entitys/category.entity';

const categoryProvider: IProviderApplication<CategoryEntity> = {
  provide: REPOSITORY.CATEGORY,
  useFactory: (connection: Connection) =>
    connection.getRepository(CategoryEntity),
  inject: [REPOSITORY.DATABASE],
};

export const categoryProviders = [categoryProvider];
