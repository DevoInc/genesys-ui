import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        '@devoinc/genesys-ui',
        '@devoinc/genesys-icons/dist/icon-variables',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
        'lodash',
        'react-filepond',
        'react-color',
        'polished',
        'filepond-plugin-image-preview',
        'filepond-plugin-file-validate-type',
        'filepond-plugin-file-validate-size'
      ],
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
  ],
});
