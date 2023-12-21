import { resolve } from 'path';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
// Used from @storybook/react-vite dependencies
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
        '@devoinc/genesys-ui',
        'styled-components',
        '@tanstack/react-virtual',
        'lodash',
        'date-fns',
        'date-fns/locale',
        'date-fns-tz',
        'filepond',
        'react-filepond',
        'react-color',
        '@popperjs/core',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'styled-components': 'styled',
          '@devoinc/genesys-ui': 'genesysUi',
          '@tanstack/react-virtual': 'ReactVirtual',
          lodash: 'lodash',
          'date-fns': 'dateFns',
          'date-fns-tz': 'dateFnsTz',
          filepond: 'filepond',
          'react-filepond': 'reactFilepond',
          'react-color': 'reactColor',
          '@popperjs/core': 'popperCore',
          'date-fns/locale': 'dateFnsLocale',
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
