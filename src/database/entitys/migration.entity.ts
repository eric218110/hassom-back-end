/**
 *
 * @author Eric Silva
 * @export MigrationEntity
 * @class MigrationEntity
 * @extends {MainEntity}
 *
 */

import { Entity, Column } from 'typeorm';
import { MainEntity } from './main';

@Entity({ name: 'migrations' })
export class MigrationEntity extends MainEntity {
  @Column({ length: 250, nullable: false })
  tableName: string;

  @Column({ default: false })
  isSeed: boolean;
}
