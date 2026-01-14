import { Module } from '@nestjs/common';
import { AssignmebtsService } from './assignmebts.service';
import { AssignmebtsController } from './assignmebts.controller';

@Module({
  controllers: [AssignmebtsController],
  providers: [AssignmebtsService],
})
export class AssignmebtsModule {}
