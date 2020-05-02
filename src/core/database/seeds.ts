// RESPONSAVEL POR PREENCHER MINHA BASE DE DADOS EM MODO DE DESENVOLVIMENTO
import { GlobalService } from '../../global/service';
import { Logger } from '@nestjs/common';
// import * as dataProdution from './data/prodution.json';
// import { getRepository } from 'typeorm';
// import { ProductEntity } from '../../database/entity/product.entity';

export class CoreSeeds {
  public initSeeds() {
    if (this.getMode()) {
      Logger.log('Init Seed', 'SeedDevelopment');
      this.seedProdution();
    }
  }

  private async seedProdution() {
    // TODO: CREATE SEED PRODUCTS
  }

  private getMode() {
    GlobalService.initEnv();
    return process.env.MODE === 'development' ? true : false;
  }
}
