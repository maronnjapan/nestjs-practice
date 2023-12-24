import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AppService } from './app.service';
import { Hero } from './hero/hero';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // call(): Observable<Hero> {
  //   return this.appService.getHero();
  // }
}