import { Query, Resolver } from '@nestjs/graphql';
import { AppModel } from './app.model';
import { AppService } from './app.service';

@Resolver(of => AppModel)
export class AppResolver {
    constructor(private appService: AppService) { }

    @Query(() => AppModel, { name: 'apps' })
    getHero() {
        return this.appService.getHero()
    }
}