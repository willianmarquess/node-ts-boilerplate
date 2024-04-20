import { createLogger, format, Logger, transports } from 'winston';
import { LogAdapter, LogInput } from '@/core/log/LogAdapter';

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
                    filename: 'logs/error.log',
                    level: 'error',
                }),
                new transports.File({
                    filename: 'logs/info.log',
                    level: 'info',
                }),
                new transports.Console(),
            ],
        });
    }

    info(message: LogInput): void {
        this.logger.info(message);
    }

    error(message: LogInput): void {
        this.logger.error(message);
    }
}
