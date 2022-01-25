import { Test, TestingModule } from '@nestjs/testing';
import { DisciplesController } from './disciples.controller';

describe('DisciplesController', () => {
  let controller: DisciplesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplesController],
    }).compile();

    controller = module.get<DisciplesController>(DisciplesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
