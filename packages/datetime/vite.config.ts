import { resolve } from 'path';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@devoinc/genesys-icons',
        '@devoinc/genesys-ui',
        'styled-components',
        'react-popper',
        'date-fns',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDom',
          '@devoinc/genesys-icons': 'genesysIcons',
          'styled-components': 'styled',
          '@devoinc/genesys-ui': 'genesysUi',
          'react-popper': 'reactPopper',
          'date-fns': 'dateFns',
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
