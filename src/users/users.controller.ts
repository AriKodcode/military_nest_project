import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { CommanderGuard } from 'src/auth/auth.commanderGuard';
import { SoliderGuard } from 'src/auth/auth.soldierGuard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @UseGuards(CommanderGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('getall')
  @UseGuards(SoliderGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get('findbyemail:email')
  @UseGuards(CommanderGuard)
  findByMail(@Param('email') email: string) {
    return this.usersService.findByMail(email);
  }

  @Patch('update:id')
  @UseGuards(CommanderGuard)
  update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('delete:id')
  @UseGuards(CommanderGuard)
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
