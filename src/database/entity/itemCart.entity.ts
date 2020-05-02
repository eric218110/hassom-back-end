// USAR API DOS CORREIOS PARA PREENCHER
// APENAS UM COMO DEFAULT, PADRÃO
/**
 *
 * @author Eric Silva
 * @export ItemCartEntity
 * @class ItemCartEntity
 * @extends { MainEntity }
 *
 */

import { Entity, Column, OneToOne, OneToMany } from 'typeorm';
import { MainEntity } from './main.entity';
import { PersonEntity } from './person.entity';
import { ProductEntity } from './product.entity';

@Entity({ name: 'itemCart' })
export class ItemCartEntity extends MainEntity {
  @Column({ unique: true })
  cod: string;

  @Column({ nullable: false })
  dateCreate: string;

  @Column({ nullable: false })
  amount: string;

  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => PersonEntity,
    person => person.itemCart,
  )
  person: PersonEntity;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => ProductEntity,
    products => products.itemCart,
  )
  products: ProductEntity[];
}
