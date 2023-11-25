import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { AuthorizationHeaderStrategyWithKey } from 'customized-jwt-strategy';


@Injectable()
export class JwtStrategy extends AuthorizationHeaderStrategyWithKey.strategy({ secretOrKey: jwtConstants.secret }) {
    constructor() {
        super();
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}