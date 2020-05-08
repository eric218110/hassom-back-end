import { REPOSITORY } from 'src/constants';
import { Connection, Repository } from 'typeorm';

type useFactoryRepository<T> = (connection: Connection) => Repository<T>;
type useFactoryDatabase<T> = () => Promise<T>;

export interface IProviderApplication<T> {
  provide: REPOSITORY;
  useFactory: useFactoryRepository<T> | useFactoryDatabase<T>;
  inject?: [REPOSITORY.DATABASE];
}
