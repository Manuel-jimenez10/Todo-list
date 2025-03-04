import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Lists } from 'src/Entities/list.entity';
import { Repository } from 'typeorm';
import { CreateListDto } from './createListsDto.dto';
import { Users } from 'src/Entities/users.entity';
import { UsersService } from 'src/Users/users.service';
import { UpdateListDto } from './updateListsDto.dto';

@Injectable()
export class ListsService {
constructor(
    @InjectRepository(Lists) private listsRepository: Repository<Lists>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>, 
    private usersService: UsersService
  ) {}

  async createList(userId: Users, createListDto: CreateListDto){
  const user = await this.usersRepository.findOne({where: {id: userId.id}});
  if(!user) throw new NotFoundException('usuario no encontrado');
  const newList = this.listsRepository.create({...createListDto, user: userId});
  return await this.listsRepository.save(newList);
  }

async updateList(updateListDto: UpdateListDto, listId: UUID){
   const findList = await this.listsRepository.findOne({where: {id: listId}})
   if(!findList) throw new NotFoundException('lista no encontrada')
   return await this.listsRepository.update(listId, updateListDto)
}

}
