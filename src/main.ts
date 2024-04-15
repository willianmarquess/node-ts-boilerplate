import fastify from 'fastify';

class Application {
    async start() {
        const server = fastify();

        server.get('/ping', (_req, _reply) => {
            return 'pong';
        });

        await server.listen({
            port: 3333,
        });

        console.log('server started 👌 ');
    }
}

new Application().start();
