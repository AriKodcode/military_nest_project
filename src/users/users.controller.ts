import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('getall')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('findbyemail:email')
  findByMail(@Param('email') email: string) {
    return this.usersService.findByMail(email);
  }

  @Patch('update:id')
  update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('delete:id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
