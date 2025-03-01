import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/Entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTOS/createUserdto.dto';
import { UpdateUserDto } from './DTOS/updateUserdto.dto';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async createUser(user: CreateUserDto) {
    const newUser = this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
  }

  async updateUser(id: UUID, user: UpdateUserDto) {
    const foundUser = await this.usersRepository.findOneBy({ id: id });
    if (!foundUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    // 2. Verificar si el nuevo email ya está en uso por otro usuario
    if (user.email && user.email !== foundUser.email) {
      const userWithEmail = await this.usersRepository.findOneBy({
        email: user.email,
      });

      if (userWithEmail) {
        throw new ConflictException('El email ya está en uso');
      }
    }

    await this.usersRepository.update(id, user);
  }

  

}
