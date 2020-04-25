// RESPONSAVEL POR PREENCHER MINHA BASE DE DADOS EM MODO DE DESENVOLVIMENTO
import { GlobalService } from '../../global/service';
import { Logger } from '@nestjs/common';
// import * as dataProdution from './data/prodution.json';
// import { ProductRepository } from '../../source/products/products.repository';
import { getRepository } from 'typeorm';
import { ProductEntity } from '../../database/entity/product.entity';

export class CoreSeeds {
  // private readonly productRepository: ProductRepository;

  public initSeeds() {
    if (this.getMode()) {
      Logger.log('Init Seed', 'SeedDevelopment');
      this.seedProdution();
    }
  }

  private async seedProdution() {
    const productRepository = getRepository(ProductEntity);
    const productE = new ProductEntity();
    productE.cod = '200';
    productE.amount = 10;
    productE.description = 'Teste Seed';
    productE.price = 'R$ 15.00';
    productRepository.save(productE);
  }

  private getMode() {
    GlobalService.initEnv();
    return process.env.MODE === 'development' ? true : false;
  }
}
