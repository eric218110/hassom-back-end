/**
 *
 * @author Eric Silva
 * @export TelephoneEntity
 * @class TelephoneEntity
 * @extends { MainEntity }
 *
 */

import { Entity, Column, ManyToOne } from 'typeorm';
import { MainEntity } from './main.entity';
import { PersonEntity } from './person.entity';

@Entity({ name: 'telephone' })
export class TelephoneEntity extends MainEntity {
  @Column({ length: 250, unique: true })
  type_number: string;

  @Column({ nullable: false })
  number: string;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => PersonEntity,
    person => person.telephone,
  )
  person: PersonEntity;
}
