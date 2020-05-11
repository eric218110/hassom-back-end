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
  fieldname: string;

  @Column({ nullable: false })
  originalname: string;

  @Column({ nullable: false })
  encoding: string;

  @Column({ nullable: false })
  mimetype: string;

  @Column({ nullable: false })
  destination: string;

  @Column({ nullable: false })
  filename: string;

  @Column({ nullable: false })
  path: string;

  @Column({ nullable: false })
  size: number;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => ProductEntity,
    product => product.images,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      nullable: false,
    },
  )
  product: ProductEntity;
}
