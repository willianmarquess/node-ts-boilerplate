export default interface LogAdapter {
    info(message: string): void;
    error(message: string): void;
}
