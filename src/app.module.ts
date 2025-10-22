import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'200819',
      database:'school_ms',
      entities:[User],
      synchronize:false,
    }),
    UsersModule
  ],
  controllers: [],
  providers:[]
})
export class AppModule {}
