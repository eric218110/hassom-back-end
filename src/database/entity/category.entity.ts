/**
 *
 * @author Eric Silva
 * @export CategoryEntity
 * @class CategoryEntity
 * @extends { MainEntity }
 *
 */

import { Entity, Column, OneToOne } from 'typeorm';
import { MainEntity } from './main.entity';
import { ProductEntity } from './product.entity';

@Entity({ name: 'category' })
export class CategoryEntity extends MainEntity {
  @Column({ length: 250, unique: true })
  name: string;

  @Column({ nullable: false })
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(type => ProductEntity, (product: ProductEntity) => product.category)
  product: ProductEntity;
}
