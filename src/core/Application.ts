import { LogAdapter } from '@/core/log/LogAdapter';
import Server from '@/core/server/Server';

export default class Application {
    constructor(
        private logger: LogAdapter,
        private server: Server,
    ) {}

    async start() {
        await this.server.setup().start();
        this.logger.info('application has started 🚀');
        return this;
    }

    async shutdown() {
        await this.server.close();
        this.logger.info('application has closed 🪂');
    }
}
