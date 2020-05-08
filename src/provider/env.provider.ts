import { config } from 'dotenv';

export class Env {
  static init(): void {
    config();
  }
}
