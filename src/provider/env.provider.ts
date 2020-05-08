import { config } from 'dotenv';

export class Env {
  static init(): void {
    config();
  }

  static isDev(): boolean {
    this.init();
    return process.env.MODE === 'development' ? true : false;
  }
}
