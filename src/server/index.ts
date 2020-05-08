import { Module } from '@nestjs/common';
import { MainModule } from '../source';

@Module({
  imports: [MainModule],
})
export class ServerModule {}
