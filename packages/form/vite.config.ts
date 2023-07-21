import { resolve } from 'path';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
// Used from @storybook/react-vite dependencies
import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
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
        'react-filepond',
        'filepond-plugin-file-validate-size',
        'filepond-plugin-file-validate-type',
        'filepond-plugin-image-preview',
        'react-color',
        'lodash',
        'polished',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDom',
          'styled-components': 'styled',
          '@devoinc/genesys-ui': 'genesysUi',
          'react-filepond': 'reactFilepond',
          'filepond-plugin-file-validate-size':
            'filepondPluginFileValidateSize',
          'filepond-plugin-file-validate-type':
            'filepondPluginFileValidateType',
          'filepond-plugin-image-preview': 'filepondPluginImagePreview',
          'react-color': 'reactColor',
          lodash: 'lodash',
          polished: 'polished',
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
