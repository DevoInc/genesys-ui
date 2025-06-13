import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import react from '@vitejs/plugin-react';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../packages/*/@(src|stories)/**/*.@(stories.ts|stories.tsx|mdx)',
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
  },
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/preset-scss'),
  ],
  docs: {
    defaultName: 'Overview',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [
        react({
          babel: {
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  displayName: true,
                  fileName: false,
                  pure: true,
                },
              ],
            ],
          },
        }),
      ],
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          // '@devoinc/genesys-brand-devo',
          // 'storybook/actions',
          // '@storybook/addon-docs',
          // '@storybook/addon-docs/blocks',
          // '@storybook/addon-themes',
          // '@storybook/blocks',
          // 'storybook/theming',
          // 'storybook/internal/components',
          // 'styled-components',
          // 'lodash',
          // 'js-cookie',
          // '@devoinc/genesys-icons',
          // 'react-dock',
          // 'react-popper',
          // 'react-toastify',
          // 'react-select',
          // 'ahooks',
          // 'react-windowed-select',
          // '@dnd-kit/sortable',
          // '@dnd-kit/utilities',
          // '@dnd-kit/modifiers',
          // '@dnd-kit/core',
          // 'react-grid-system',
          // 'react-dom/server',
          // 'react-select/creatable',
          // 'monaco-editor-core',
          // 'file-saver',
          // 'react-color',
          // 'date-fns',
          // 'framer-motion',
          // 'date-fns/fp',
          // 'date-fns/locale',
          // 'react-filepond',
          // 'filepond-plugin-image-preview',
          // 'filepond-plugin-file-validate-type',
          // 'filepond-plugin-file-validate-size',
          // '@devoinc/holo',
          // '@tanstack/react-virtual',
          // '@date-fns/tz',
        ],
      },
    });
  },
  // typescript: {
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     EXPERIMENTAL_useWatchProgram: true,
  //     shouldExtractLiteralValuesFromEnum: true,
  //     shouldRemoveUndefinedFromOptional: true,
  //     savePropValueAsString: true,
  //     // Required to show values from type declarations coming from node_modules.
  //     // Overrides the default value of `react-docgen-typescript` which is
  //     // '(prop) => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true'
  //     propFilter: () => true,
  //   },
  //   check: true,
  // },
  staticDirs: ['assets'],
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
