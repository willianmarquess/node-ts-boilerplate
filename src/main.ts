import Application from '@/core/Application';
import WinstonLogAdapter from '@/infra/log/WinstonLogAdapter';
import Server from './core/server/Server';

const logger = new WinstonLogAdapter();

new Application(logger, new Server(logger)).start();
