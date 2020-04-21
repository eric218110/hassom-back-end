import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalService } from '../../global/service';
import { ProductEntity } from '../entity/product.entity';

GlobalService.initEnv();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [ProductEntity],
      synchronize: true,
      logger: 'debug',
      migrationsRun: Boolean(process.env.RUN_MIGRATIONS),
    }),
  ],
})
export class DatabaseModule {}
