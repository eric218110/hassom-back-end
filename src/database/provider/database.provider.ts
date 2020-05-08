import { createConnection, Connection } from 'typeorm';
import { resolve } from 'path';
import { REPOSITORY } from '../../constants';
import { IProviderApplication } from 'src/common/provider.inteface';
import { Env } from '../../provider/env.provider';

Env.init();

export const databaseProvider: IProviderApplication<Connection> = {
  provide: REPOSITORY.DATABASE,
  useFactory: async () =>
    await createConnection({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      synchronize: Boolean(process.env.SYNCHRONIZE),
      migrationsRun: Boolean(process.env.RUN_MIGRATIONS),
      entities: [resolve(__dirname, '..', 'entitys', '*.entity{.ts,.js}')],
      logger: 'debug',
    }),
};
