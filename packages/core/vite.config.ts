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
        'styled-components',
        '@popperjs/core',
        'react-dock',
        'react-grid-system',
        'react-popper',
        'react-toastify',
        '@dnd-kit/core',
        '@dnd-kit/sortable',
        'react-select',
        // Prevent emotion from being bundled with the library (comes from react-select)
        // (https://github.com/emotion-js/emotion/blob/main/packages/react/CHANGELOG.md#patch-changes-5)
        '@emotion/cache',
        '@emotion/react',
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
          '@dnd-kit/core': 'dndKitCore',
          '@dnd-kit/sortable': 'dndKitSortable',
          'react-select': 'reactSelect',
          lodash: 'lodash',
          polished: 'polished',
          'prop-types': 'propTypes',
          '@emotion/cache': 'emotionCache',
          '@emotion/react': 'emotionReact',
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
