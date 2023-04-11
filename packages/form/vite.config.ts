import { resolve } from 'path';
import { mergeConfig } from 'vite';

import viteconf from '../../vite.config';

/** @type {import('vite').UserConfig} */
export default mergeConfig(viteconf, {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
});
