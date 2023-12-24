import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { App2Model, AppModel } from './app.model';
import { AppService } from './app.service';
import { App2Args, AppArgs } from './dto/app.args';

@Resolver(of => AppModel)
export class AppResolver {
    constructor(private appService: AppService) { }

    @Query((returns) => [AppModel], { name: 'apps', nullable: true })
    async getHero(@Args() args: AppArgs): Promise<AppModel[]> {
        const hero = await this.appService.getHero();
        return [{ id: hero.id, name: hero.name }, { id: hero.id, name: hero.name }, { id: hero.id, name: hero.name },]
    }

    @ResolveField((returns) => App2Model, { name: 'files', nullable: true })
    async files(@Parent() patient: AppModel, @Args() params: App2Args) {
        console.log(patient, params)
        return { id2: patient.id, name: patient.name };
    }
}