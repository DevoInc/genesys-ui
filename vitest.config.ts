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
    projects: [
      {
        extends: true,
        test: {
          name: 'code',
          root: 'packages/code',
          setupFiles: [resolve(__dirname, './vitest.setup.ts')],
          alias: {
            'monaco-editor-core': resolve(
              __dirname,
              './node_modules/monaco-editor-core/esm/vs/editor/editor.main',
            ),
          },
          deps: { optimizer: { web: { include: ['vitest-canvas-mock'] } } },
          poolOptions: { threads: { singleThread: true } },
        },
      },
      {
        extends: true,
        test: { name: 'color', root: 'packages/color' },
      },
      {
        extends: true,
        test: { name: 'core', root: 'packages/core' },
      },
      {
        extends: true,
        test: { name: 'datetime', root: 'packages/datetime' },
      },
      {
        extends: true,
        test: { name: 'table', root: 'packages/table' },
      },
      // {
      //   extends: true,
      //   test: { name: 'upload', root: 'packages/upload',
      //     alias: {
      //       'react-filepond': resolve(
      //         __dirname,
      //         './node_modules/react-filepond/dist/react-filepond.esm',
      //       ),
      //     },
      //   },
      // },
    ],
  },
});
