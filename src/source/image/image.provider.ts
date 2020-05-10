import { Connection } from 'typeorm';
import { REPOSITORY } from 'src/constants';
import { IProviderApplication } from '../../common/provider.inteface';
import { ImagesEntity } from 'src/database/entitys/images.entity';

const imageProvider: IProviderApplication<ImagesEntity> = {
  provide: REPOSITORY.IMAGE,
  useFactory: (connection: Connection) =>
    connection.getRepository(ImagesEntity),
  inject: [REPOSITORY.DATABASE],
};

export const imageProviders = [imageProvider];
