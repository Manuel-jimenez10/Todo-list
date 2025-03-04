import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTOS/createUserdto.dto';
import { UpdateUserDto } from './DTOS/updateUserdto.dto';
import { UUID } from 'crypto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Post()
create(@Body() createUserDto: CreateUserDto) {
  return this.usersService.createUser(createUserDto);
}

@Put(':id')
update(@Param('id') id: UUID, @Body() updateUserDto: UpdateUserDto) {
  return this.usersService.updateUser(id, updateUserDto);
}

@Get(':id')
findOne(@Param('id') id: UUID) {
  return this.usersService.getUserById(id);
}


}
