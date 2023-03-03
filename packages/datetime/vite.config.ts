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
});
