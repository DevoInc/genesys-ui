/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

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
        '@devoinc/genesys-ui-datetime',
        '@devoinc/genesys-icons',
        '@tanstack/react-virtual',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
        'lodash',
        'date-fns',
        'date-fns-tz',
        'date-fns/locale',
      ],
    },
  },
  plugins: [
    tsconfigPaths(),
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
    dts({
      entryRoot: './src/',
      exclude: ['./src/**/*.test.ts?(x)', './src/**/*.stories.tsx'],
    }),
  ],
  test: {
    environment: 'happy-dom',
    include: ['{src,stories}/**/*.test.ts?(x)'],
  },
});
