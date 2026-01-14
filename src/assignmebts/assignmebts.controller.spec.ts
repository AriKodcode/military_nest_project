import { Test, TestingModule } from '@nestjs/testing';
import { AssignmebtsController } from './assignmebts.controller';
import { AssignmebtsService } from './assignmebts.service';

describe('AssignmebtsController', () => {
  let controller: AssignmebtsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignmebtsController],
      providers: [AssignmebtsService],
    }).compile();

    controller = module.get<AssignmebtsController>(AssignmebtsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
