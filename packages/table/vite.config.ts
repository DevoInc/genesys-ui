import { resolve } from 'path';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
// Used from @storybook/react-vite dependencies
import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', '@devoinc/genesys-ui', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'styled-components': 'styled',
          '@devoinc/genesys-ui': 'genesysUi',
        },
      },
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
  ],
});
