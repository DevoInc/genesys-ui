import { resolve } from 'path';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
// Used from @storybook/react-vite dependencies
import react from '@vitejs/plugin-react';
import { viteExternalsPlugin } from 'vite-plugin-externals';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
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
    visualizer({
      filename: 'dist/stats.html',
    }),
    viteExternalsPlugin({
      react: 'React',
      'styled-components': 'styled',
      '@devoinc/genesys-ui': 'genesysUi',
      '@tanstack/react-virtual': 'reactVirtual',
      'date-fns': 'dateFns',
      'date-fns-tz': 'dateFnsTz',
    }),
  ],
});
