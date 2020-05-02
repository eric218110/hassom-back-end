import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalService } from '../../global/service';
import { ProductEntity } from '../entity/product.entity';
import { BankSlipEntity } from '../entity/bankSlip.entity';
import { CategoryEntity } from '../entity/category.entity';
import { TelephoneEntity } from '../entity/telephone.entity';
import { ItemCartEntity } from '../entity/itemCart.entity';
import { AddressEntity } from '../entity/address.entity';
import { PersonEntity } from '../entity/person.entity';
import { CrerditCardEntity } from '../entity/creditCard.entity';

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
      entities: [
        BankSlipEntity,
        CategoryEntity,
        CrerditCardEntity,
        TelephoneEntity,
        ItemCartEntity,
        AddressEntity,
        PersonEntity,
        ProductEntity,
      ],
      synchronize: true,
      logger: 'debug',
      migrationsRun: Boolean(process.env.RUN_MIGRATIONS),
    }),
  ],
})
export class DatabaseModule {}
