import { resolve } from 'path';
import { defineConfig } from 'vite';

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
    dts(),
    visualizer({
      filename: 'dist/stats.html',
    }),
  ],
});
