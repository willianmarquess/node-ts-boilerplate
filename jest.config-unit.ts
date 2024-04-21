import config from './jest.config';

config.testMatch = ['<rootDir>/test/unit/**/*.spec.ts']
config.coverageThreshold = {
    global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
    }
}

export default config;
