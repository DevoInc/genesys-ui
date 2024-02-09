module.exports = {
  root: true,
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./packages/*/tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    'no-use-before-define': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-alert': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    'no-useless-escape': 'warn',
    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/no-base-to-string': 'warn',
    radix: 'warn',
    'consistent-return': 'warn',
    indent: [
      'warn',
      2,
      {
        ignoredNodes: ['TemplateLiteral > *'],
        offsetTernaryExpressions: true,
      },
    ],
  },
  extends: ['@devoinc/eslint-config-devo/ts-react-jest'],
};
