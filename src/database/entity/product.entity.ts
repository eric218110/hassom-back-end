/**
 *
 * @author Eric Silva
 * @export ProductEntity
 * @class ProductEntity
 * @extends {MainEntity}
 *
 */

import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { MainEntity } from './main.entity';
import { CategoryEntity } from './category.entity';
import { ItemCartEntity } from './itemCart.entity';

@Entity({ name: 'products' })
export class ProductEntity extends MainEntity {
  @Column({ unique: true, nullable: false })
  barcode: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  cost: number;

  @Column({ nullable: false })
  amount: number;

  @Column({ nullable: false })
  initDate: string;

  @Column({ unique: true })
  lastSelling: Date;

  @Column({ unique: true })
  expirationDate: string;

  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => CategoryEntity,
    category => category.product,
  )
  @JoinColumn()
  category: CategoryEntity;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => ItemCartEntity,
    itemCart => itemCart.products,
  )
  itemCart: ItemCartEntity;
}
