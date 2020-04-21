import { config } from 'dotenv';

export class GlobalService {
  static initEnv(): void {
    config();
  }
}
