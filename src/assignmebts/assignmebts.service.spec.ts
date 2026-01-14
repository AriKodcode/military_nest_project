import { Test, TestingModule } from '@nestjs/testing';
import { AssignmebtsService } from './assignmebts.service';

describe('AssignmebtsService', () => {
  let service: AssignmebtsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignmebtsService],
    }).compile();

    service = module.get<AssignmebtsService>(AssignmebtsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
