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
        'styled-components',
        '@popperjs/core',
        'react-dock',
        'react-grid-system',
        'react-popper',
        'react-toastify',
        'react-tooltip',
        '@dnd-kit/core',
        '@dnd-kit/sortable',
        'react-select',
        'lodash',
        'polished',
        'prop-types',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDom',
          'styled-components': 'styled',
          '@popperjs/core': 'popperjsCore',
          'react-dock': 'reactDock',
          'react-grid-system': 'reactGridSystem',
          'react-popper': 'reactPopper',
          'react-toastify': 'reactToastify',
          'react-tooltip': 'reactTooltip',
          '@dnd-kit/core': 'dndKitCore',
          '@dnd-kit/sortable': 'dndKitSortable',
          'react-select': 'reactSelect',
          lodash: 'lodash',
          polished: 'polished',
          'prop-types': 'propTypes',
        },
      },
    },
  },
});
