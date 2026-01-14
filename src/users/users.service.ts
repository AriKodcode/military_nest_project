import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { where } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return await this.userModel.create({ createUserDto } as any);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findByMail(email: string) {
    return await this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  async update(id: number, userUpdateDto: CreateUserDto) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user.update(userUpdateDto);
  }

  async remove(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user.destroy();
  }
}
