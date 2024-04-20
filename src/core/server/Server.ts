import fastify from 'fastify';
import LogAdapter from '../log/LogAdapter';
import ExampleController from '@/presentation/controllers/ExampleController';

export default class Server {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    private fastify: any;

    constructor(private logger: LogAdapter) {
        this.fastify = fastify();
    }

    get serverInstance() {
        return this.fastify.server;
    }

    setup() {
        this.fastify.get('/example', () => {
            const exampleController = new ExampleController();
            return exampleController.example();
        });
        return this;
    }

    async start() {
        await this.fastify.listen({
            port: 3333,
        });

        this.logger.info('server started 👌');
    }

    async close() {
        this.logger.info('server has closed 👌');
        return this.fastify.close();
    }
}
