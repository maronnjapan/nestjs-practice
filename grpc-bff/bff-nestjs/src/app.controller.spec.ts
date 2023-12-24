import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

describe('AppController', () => {
  let appController: AppController;
  let resolver: AppResolver;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, AppResolver],
    }).compile();

    appController = app.get<AppController>(AppController);
    resolver = app.get(AppResolver)
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      resolver.getHero()
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
