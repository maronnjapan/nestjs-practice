import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { HEROES_SERVICE_NAME, Hero, HeroById } from "./hero";
import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";

@Controller()
export class HeroesController {
    @GrpcMethod(HEROES_SERVICE_NAME)
    findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
        const items = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Doe' },
        ];
        return items.find(({ id }) => id === data.id);
    }
}