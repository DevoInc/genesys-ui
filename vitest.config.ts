import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { coverageConfigDefaults } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
              pure: true,
            },
          ],
        ],
      },
    }),
  ],
  test: {
    coverage: {
      provider: 'v8',
      include: ['{src,stories}/**/*'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'storybook-static/**/*',
        '**/*.stories.tsx',
      ],
    },
    include: ['{src,stories}/**/*.test.ts?(x)'],
    environment: 'happy-dom',
    alias: {
      '@test': resolve(__dirname, './test/test-utils.tsx'),
    },
  },
});
