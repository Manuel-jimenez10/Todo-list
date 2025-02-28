import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from 'src/Entities/task.entity';
import { Users } from 'src/Entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Tasks) private tasksRepository: Repository<Tasks>) {}

    async addUser(user: Users){
    
    }

}
