import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from '@/config/typeorm.config';
import { User } from './entities/user.entity';

// Add new repos here
const Repositories = TypeOrmModule.forFeature([User]);

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig), Repositories],
  exports: [TypeOrmModule],
})
export class DbModule {}
