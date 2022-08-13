import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../db/entities/user.entity';
import { UserRegisterDto } from '../../dts';
import { Role } from '../../types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async doUserRegistration(userRegister: UserRegisterDto): Promise<User> {
    return await this.userRepo.save(this.userRepo.create(userRegister));
    // return await this.userRepo.save(userRegister);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { email } });
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepo.findOne({ where: { id } });
  }
  getRoleById(id: number): string {
    return Role.USER;
  }
}
