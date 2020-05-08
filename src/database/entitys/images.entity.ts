/**
 *
 * @author Eric Silva
 * @export ImagesEntity
 * @class ImagesEntity
 * @extends {MainEntity}
 *
 */

import { Entity, Column, ManyToOne } from 'typeorm';
import { MainEntity } from './main';
import { ProductEntity } from './product.entity';

@Entity({ name: 'images' })
export class ImagesEntity extends MainEntity {
  @Column({ nullable: false })
  url: string;

  @Column({ length: 250, nullable: false })
  alt: string;

  @Column({ nullable: false })
  widht: number;

  @Column({ nullable: false })
  heith: number;

  @Column({ nullable: false })
  size: number;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => ProductEntity,
    product => product.images,
  )
  product: ProductEntity;
}
