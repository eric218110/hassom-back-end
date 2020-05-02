/**
 *
 * @author Eric Silva
 * @export CrerditCardEntity
 * @class CrerditCardEntity
 * @extends { MainEntity }
 *
 */

import { Entity, Column, ManyToOne } from 'typeorm';
import { MainEntity } from './main.entity';
import { PersonEntity } from './person.entity';

@Entity({ name: 'creditCard' })
export class CrerditCardEntity extends MainEntity {
  @Column({ length: 200, unique: true, nullable: false })
  number: string;

  @Column({ nullable: false })
  holderName: string;

  @Column({ nullable: false })
  active: boolean;

  @Column({ nullable: false })
  flag: string;

  @Column({ nullable: false })
  cvv: string;

  @Column({ nullable: false })
  expirationDate: Date;

  @Column({ nullable: false })
  default: boolean;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => PersonEntity,
    person => person.cardsCredit,
  )
  person: PersonEntity;
}
