// module.exports = {
//   preset: 'ts-jest',
//   rootDir: 'src',
//   moduleDirectories: ['node_modules', '../../test'],
// };

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
};

const config = {
  projects: [
    {
      ...baseConfig,
      displayName: '@devoinc/genesys-ui',
      testMatch: ['<rootDir>/packages/core/src/**/*.test.ts'],
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
