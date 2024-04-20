import LogAdapter from './log/LogAdapter';
import Server from './server/Server';

export default class Application {
    constructor(
        private logger: LogAdapter,
        private server: Server,
    ) {}

    async start() {
        await this.server.setup().start();
        this.logger.info('application started 🚀');
        return this;
    }

    async shutdown() {
        await this.server.close();
        this.logger.info('application closed 🪂');
    }
}
