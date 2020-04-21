/**
 *
 * @author Eric Silva
 * @export ProductEntity
 * @class ProductEntity
 * @extends {MainEntity}
 *
 */

import { Entity, Column } from 'typeorm';
import { MainEntity } from './main.entity';

@Entity({ name: 'Products' })
export class ProductEntity extends MainEntity {
  @Column({ length: 250 })
  cod: string;

  @Column({ unique: true })
  price: string;

  @Column({ unique: true })
  amount: number;

  @Column({ length: 250, nullable: false })
  description: string;
}
