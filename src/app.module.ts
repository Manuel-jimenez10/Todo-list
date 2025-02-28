import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './Entities/users.entity';
import { Lists } from './Entities/list.entity';
import { Tasks } from './Entities/task.entity';
import { Tags } from './Entities/tag.entity';
import { TaskTag } from './Entities/task-tag.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './Users/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: `${process.env.DB_NAME}`,
      host: `${process.env.DB_HOST}`,
      port: parseInt(`${process.env.DB_PORT}`),
      username: `${process.env.DB_USER}`,
      password: `${process.env.DB_PASSWORD}`,
      entities: [ Lists, Users, Tasks, Tags, TaskTag ],
      synchronize: true,
      //dropSchema: true
    })
  ],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
