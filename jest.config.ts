const baseConfig = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // TODO When the maturity of the project allow to check types in tests
        // remove this line
        isolatedModules: true,
      },
    ],
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
};

const config = {
  projects: [
    {
      ...baseConfig,
      displayName: '@devoinc/genesys-ui',
      testMatch: [
        '<rootDir>/packages/core/src/**/*.test.ts',
        // To be generalized after repairing all TSX (component) tests
        '<rootDir>/packages/core/src/components/Helper/Helper.test.tsx',
      ],
    },
    {
      ...baseConfig,
      displayName: '@devoinc/genesys-ui-datetime',
      testMatch: ['<rootDir>/packages/datetime/src/**/*.test.ts'],
    },
    {
      ...baseConfig,
      displayName: '@devoinc/genesys-ui-form',
      testMatch: ['<rootDir>/packages/form/src/**/*.test.ts'],
    },
  ],
};

export default config;
