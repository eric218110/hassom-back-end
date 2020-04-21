import { GlobalService } from '../../global/service';

export class ConfigService {
  private host: string;
  private port: number;
  private user: string;
  private password: string;
  private database: string;
  private migrations: boolean;

  constructor() {
    GlobalService.initEnv();
    this.host = process.env.POSTGRES_HOST;
    this.port = Number(process.env.POSTGRES_PORT);
    this.user = process.env.POSTGRES_USER;
    this.password = process.env.POSTGRES_PASSWORD;
    this.database = process.env.POSTGRES_DATABASE;
    this.migrations = Boolean(process.env.RUN_MIGRATIONS);
  }

  public getConfigTypeOrm(): {} {
    return {
      HOST: this.host,
      PORT: this.port,
      USER: this.user,
      PASSWORD: this.password,
      DATABASE: this.database,
      MIGRATIONS_RUN: this.migrations,
    };
  }
}
