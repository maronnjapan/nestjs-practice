import { Test, TestingModule } from '@nestjs/testing';
import { HeroesController } from './hero.controller';

describe('HeroController', () => {
  let controller: HeroesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroesController],
    }).compile();

    controller = module.get<HeroesController>(HeroesController);
  });

  it('should be defined', () => {
    controller.
      expect(controller).toBeDefined();
  });
});
