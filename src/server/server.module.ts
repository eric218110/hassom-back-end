import { Module } from '@nestjs/common';
import { AppModule } from '../source/app/app.module';
import { DatabaseModule } from 'src/database/module/database.module';

@Module({
  imports: [DatabaseModule, AppModule],
})
export class ServerModule {}
