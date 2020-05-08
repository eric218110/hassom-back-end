/**
 *
 * @author Eric Silva
 * @export CategoryEntity
 * @class CategoryEntity
 * @extends { MainEntity }
 *
 */

import { Entity, Column, OneToMany } from 'typeorm';
import { MainEntity } from './main';
import { ProductEntity } from './product.entity';

@Entity({ name: 'category' })
export class CategoryEntity extends MainEntity {
  @Column({ length: 250, unique: true })
  name: string;

  @Column({ nullable: false })
  description: string;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => ProductEntity,
    (product: ProductEntity) => product.category,
  )
  product: ProductEntity[];
}
