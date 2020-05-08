import { Connection } from 'typeorm';
import { Photo } from '../../database/entitys/photo.entity';
import { REPOSITORY } from 'src/constants';
import { IProviderApplication } from '../../common/provider.inteface';

export const photoProvider: IProviderApplication<Photo> = {
  provide: REPOSITORY.PHOTO,
  useFactory: (connection: Connection) => connection.getRepository(Photo),
  inject: [REPOSITORY.DATABASE],
};

export const photoProviders = [photoProvider];
