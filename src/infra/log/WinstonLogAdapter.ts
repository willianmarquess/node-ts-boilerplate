import { createLogger, format, Logger, transports } from 'winston';
import LogAdapter from '@/src/core/log/LogAdapter';

export default class WinstonLogAdapter implements LogAdapter {
    private logger: Logger;

    constructor() {
        this.logger = createLogger({
            format: format.combine(
                format.timestamp(),
                format.errors({
                    stack: true,
                }),
                format.json(),
            ),
            transports: [
                new transports.File({
                    filename: 'error.log',
                    level: 'error',
                }),
                new transports.File({
                    filename: 'info.log',
                    level: 'info',
                }),
                new transports.Console(),
            ],
        });
    }

    info(message: string): void {
        this.logger.info(message);
    }

    error(message: string): void {
        this.logger.error(message);
    }
}