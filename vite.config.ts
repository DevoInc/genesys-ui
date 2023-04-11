import { resolve } from 'path';
import { defineConfig } from 'vite';
// Used from @storybook/react-vite dependencies
import react from '@vitejs/plugin-react';

import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
    sourcemap: true,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    {
      ...dts(),
      apply: 'build',
    },
    {
      ...visualizer({
        filename: 'dist/stats.html',
      }),
      apply: 'build',
    },
  ],
});
