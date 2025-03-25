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
              ssr: false,
              pure: true,
              //displayName: command !== 'build',
              //fileName: command !== 'build',
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
    name: 'datetime',
    root: 'packages/datetime',
    environment: 'happy-dom',
    alias: {
      '@test': resolve(__dirname, './test/test-utils.tsx'),
    },
  },
});
