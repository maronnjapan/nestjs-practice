import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
// import { Max, Min } from 'class-validator';

@ArgsType()
export class App2Args {
    @Field(type => String)
    // @Min(0)
    modelName;

    @Field(type => String)
    // @Min(1)
    // @Max(50)
    modelType;
}

@ArgsType()
export class AppArgs {
    @Field(type => Int)
    // @Min(0)
    skip;

    @Field(type => Int)
    // @Min(1)
    // @Max(50)
    take;
}