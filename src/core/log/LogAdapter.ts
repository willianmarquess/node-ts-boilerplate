/* eslint-disable  @typescript-eslint/no-explicit-any */
export type LogInput = any;

export interface LogAdapter {
    info(message: LogInput): void;
    error(message: LogInput): void;
}
