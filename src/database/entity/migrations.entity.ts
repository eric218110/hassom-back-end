/**
 *
 * @author Eric Silva
 * @export MigrationEntity
 * @class MigrationEntity
 * @extends {MainEntity}
 *
 */

import { Entity, Column } from 'typeorm';
import { MainEntity } from './main.entity';

@Entity({ name: 'bankSlip' })
export class MigrationEntity extends MainEntity {
  @Column({ length: 250, nullable: false })
  tableName: string;

  @Column({ default: false })
  isSeed: boolean;
}
