import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignmebtsService } from './assignmebts.service';
import { CreateAssignmebtDto } from './dto/assignmebt.dto';

@Controller('assignmebts')
export class AssignmebtsController {
  constructor(private readonly assignmebtsService: AssignmebtsService) {}

  @Post()
  create(@Body() createAssignmebtDto: CreateAssignmebtDto) {
    return this.assignmebtsService.create(createAssignmebtDto);
  }

  @Get()
  findAll() {
    return this.assignmebtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmebtsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssignmebtDto: CreateAssignmebtDto,
  ) {
    return this.assignmebtsService.update(+id, updateAssignmebtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmebtsService.remove(+id);
  }
}
