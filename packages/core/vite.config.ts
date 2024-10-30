/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
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
        'react',
        'react-dom',
        'react-dom/server',
        'react/jsx-runtime',
        'react-window',
        'react-select',
        'react-select/creatable',
        '@dnd-kit/core',
        '@dnd-kit/utilities',
        '@dnd-kit/sortable',
        'react-grid-system',
        'react-popper',
        '@popperjs/core',
        '@devoinc/genesys-brand-devo',
        '@devoinc/genesys-icons',
        'react-dock',
        'styled-components',
        'react-toastify',
        'react-windowed-select',
        'polished',
        'ahooks',
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
    coverage: {
      provider: 'v8',
      include: ['{src,stories}/**/*'],
    },
  },
});
