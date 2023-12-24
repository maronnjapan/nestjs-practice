import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class App2Model {
    @Field((type) => Number)
    id2: number
    @Field((type) => String)
    name2: string
}

@ObjectType()
export class AppModel {
    @Field((type) => Number)
    id: number
    @Field((type) => String)
    name: string
}
