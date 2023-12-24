import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { HEROES_SERVICE_NAME, HERO_PACKAGE_NAME, Hero, HeroesServiceClient } from "./hero/hero";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable, lastValueFrom } from "rxjs";
import { adjustRpcResponse } from "./utils/convertObservableToPromise";

@Injectable()
export class AppService implements OnModuleInit {
  private heroesService: HeroesServiceClient;

  constructor(@Inject(HERO_PACKAGE_NAME) private client: ClientGrpc) { }

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesServiceClient>(HEROES_SERVICE_NAME);
  }

  async getHero() {
    return await this.adjustRpcResponse<Hero>(this.heroesService.findOne({ id: 1 }));
  }

  private async adjustRpcResponse<T>(response: Observable<T>): Promise<T> {
    try {
      return await lastValueFrom(response);
    } catch (e) {
      throw e;
    }
  }

}