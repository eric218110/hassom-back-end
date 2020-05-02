/**
 *
 * @author Eric Silva
 * @export BankSlipEntity
 * @class BankSlipEntity
 * @extends {MainEntity}
 *
 */

import { Entity, Column } from 'typeorm';
import { MainEntity } from './main.entity';

@Entity({ name: 'bankSlip' })
export class BankSlipEntity extends MainEntity {
  @Column({ length: 250, unique: true, nullable: false })
  number: string;

  @Column({ nullable: false })
  type: string;
}
