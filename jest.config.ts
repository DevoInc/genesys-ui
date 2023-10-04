import type { JestConfigWithTsJest } from 'ts-jest';

const globalModuleNameMapper = {
  '\\.(scss|css)$': 'identity-obj-proxy',
  '^test-utils$': '<rootDir>/test/test-utils.tsx',
};

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './',
  projects: [
    {
      displayName: 'core',
      testEnvironment: 'jsdom',
      preset: 'ts-jest',
      testMatch: ['<rootDir>/packages/core/src/**/*.test.ts?(x)'],
      moduleNameMapper: globalModuleNameMapper,
    },
    {
      displayName: 'datetime',
      testEnvironment: 'jsdom',
      preset: 'ts-jest',
      testMatch: ['<rootDir>/packages/datetime/src/**/*.test.ts?(x)'],
      moduleNameMapper: globalModuleNameMapper,
    },
    {
      displayName: 'form',
      testEnvironment: 'jsdom',
      preset: 'ts-jest',
      testMatch: ['<rootDir>/packages/form/src/**/*.test.ts?(x)'],
      moduleNameMapper: globalModuleNameMapper,
    },
    {
      displayName: 'table',
      testEnvironment: 'jsdom',
      preset: 'ts-jest',
      testMatch: ['<rootDir>/packages/table/src/**/*.test.ts'],
      moduleNameMapper: globalModuleNameMapper,
    },
  ],
};

export default config;
