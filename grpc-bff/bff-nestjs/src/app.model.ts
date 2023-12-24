import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AppModel {
    @Field((type) => Number)
    id: number
    @Field((type) => String)
    name: string
}
