/**
 *
 * @author Eric Silva
 * @export PersonEntity
 * @class PersonEntity
 * @extends {MainEntity}
 *
 */

import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { MainEntity } from './main';
import { CrerditCardEntity } from './creditCard.entity';
import { ItemCartEntity } from './itemCart.entity';
import { TelephoneEntity } from './telephone.entity';
import { AddressEntity } from './address.entity';

@Entity({ name: 'person' })
export class PersonEntity extends MainEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  full_name: string;

  @Column({ nullable: false })
  cpf: string;

  @Column({ length: 250, unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  active: boolean;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => CrerditCardEntity,
    crerditCard => crerditCard.person,
  )
  cardsCredit: CrerditCardEntity[];

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => TelephoneEntity,
    telephone => telephone.person,
  )
  telephone: TelephoneEntity[];

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => AddressEntity,
    address => address.person,
  )
  address: AddressEntity[];

  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => ItemCartEntity,
    itemCart => itemCart.person,
  )
  @JoinColumn()
  itemCart: ItemCartEntity;
}
