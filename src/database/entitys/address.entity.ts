// USAR API DOS CORREIOS PARA PREENCHER
// APENAS UM COMO DEFAULT, PADRÃO
/**
 *
 * @author Eric Silva
 * @export AddressEntity
 * @class AddressEntity
 * @extends { MainEntity }
 *
 */

import { Entity, Column, ManyToOne } from 'typeorm';
import { MainEntity } from './main';
import { PersonEntity } from './person.entity';

@Entity({ name: 'address' })
export class AddressEntity extends MainEntity {
  @Column({ unique: true })
  default: boolean;

  @Column({ unique: true, nullable: false })
  cep: string;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => PersonEntity,
    person => person.address,
  )
  person: PersonEntity;
}
