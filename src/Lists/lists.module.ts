import { Module } from '@nestjs/common';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { Lists } from 'src/Entities/list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/Users/users.service';
import { Users } from 'src/Entities/users.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Lists, Users])],
  controllers: [ListsController],
  providers: [ListsService, UsersService]
})
export class ListsModule {}
