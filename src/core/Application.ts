import fastify from 'fastify';
import LogAdapter from './log/LogAdapter';

export default class Application {
    constructor(private logger: LogAdapter) {}

    async start() {
        const server = fastify();

        server.get('/ping', (_req, _reply) => {
            return 'pong';
        });

        await server.listen({
            port: 3333,
        });

        this.logger.info('server started 👌 ');
    }
}
