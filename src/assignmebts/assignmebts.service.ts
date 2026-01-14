import { Injectable } from '@nestjs/common';
import { CreateAssignmebtDto } from './dto/assignmebt.dto';

@Injectable()
export class AssignmebtsService {
  create(createAssignmebtDto: CreateAssignmebtDto) {
    return 'This action adds a new assignmebt';
  }

  findAll() {
    return `This action returns all assignmebts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assignmebt`;
  }

  update(id: number, updateAssignmebtDto: CreateAssignmebtDto) {
    return `This action updates a #${id} assignmebt`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignmebt`;
  }
}
