module.exports = {
  root: true,
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'cypress'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:cypress/recommended',
  ],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['*.cy.js'],
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
};
