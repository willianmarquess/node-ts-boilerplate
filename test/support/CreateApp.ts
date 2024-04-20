import Application from '@/core/Application';
import WinstonLogAdapter from '@/infra/log/WinstonLogAdapter';
import Server from '@/core/server/Server';

let app: Application;

function createApp() {
    if (app) return app;
    const logger = new WinstonLogAdapter();
    const server = new Server(logger);
    app = new Application(logger, server);
    return app;
}

export default createApp;
