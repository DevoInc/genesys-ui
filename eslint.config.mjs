// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import vitest from 'eslint-plugin-vitest';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      vitest,
      prettier,
    },
    languageOptions: {
      parserOptions: {
        project: ['./packages/*/tsconfig.json'],
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      'no-shadow': 'off',
      // '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-shadow': 'warn',
      'consistent-return': 'error',
      // 'react-refresh/only-export-components': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      // 'no-use-before-define': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
    },
  },
);
