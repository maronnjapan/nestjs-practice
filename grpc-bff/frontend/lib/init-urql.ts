import { initUrqlClient } from 'next-urql';
import { Client } from 'urql';
import { cacheExchange, dedupExchange, fetchExchange } from 'urql';

export function urqlClient(): Promise<Client> {
    return new Promise((resolve, reject) => {
        const client = initUrqlClient(
            {
                url: 'http://localhost:3003/graphql',
                exchanges: [dedupExchange, cacheExchange, fetchExchange],
            },
            false,
        );
        if (!client) {
            reject(Error('Failed to init initUrqlClient.'));
        } else {
            resolve(client);
        }
    });
}