import { createConnection, Connection } from 'typeorm';
import { resolve } from 'path';
import { REPOSITORY } from '../../constants';
import { IProviderApplication } from 'src/common/provider.inteface';

export const databaseProvider: IProviderApplication<Connection> = {
  provide: REPOSITORY.DATABASE,
  useFactory: async () =>
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '218110',
      database: 'hassom',
      synchronize: true,
      migrationsRun: true,
      entities: [resolve(__dirname, '..', 'entitys', '*.entity{.ts,.js}')],
      logger: 'debug',
    }),
};
