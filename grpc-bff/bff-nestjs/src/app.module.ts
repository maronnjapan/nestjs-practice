import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HERO_PACKAGE_NAME } from './hero/hero';
import * as path from 'path';
import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: HERO_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: HERO_PACKAGE_NAME,
          protoPath: path.join(__dirname, 'hero/hero.proto'),
        },
      },
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
    }),
  ],
  // controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { }
