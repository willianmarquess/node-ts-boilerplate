import config from './jest.config';

config.globalSetup = '<rootDir>/test/integration-setup.ts';
config.globalTeardown = '<rootDir>/test/integration-teardown.ts';
config.testMatch = ['<rootDir>/test/integration/*.spec.ts']

export default config;
