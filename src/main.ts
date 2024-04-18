import Application from '@/src/core/Application';
import WinstonLogAdapter from '@/src/infra/log/WinstonLogAdapter';

new Application(new WinstonLogAdapter()).start();
