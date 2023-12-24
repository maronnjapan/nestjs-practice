import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Hero } from './hero/hero';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async call() {
    return await this.appService.getHero();
  }
}