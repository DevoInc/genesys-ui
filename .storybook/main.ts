import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../packages/*/src/**/*.stories.@(ts|tsx)',
    '../packages/*/src/**/*.mdx',
    '../packages/*/stories/**/*.stories.@(ts|tsx)',
    '../packages/*/stories/**/*.mdx',
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/preset-scss'),
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          '@storybook/theming',
          '@storybook/components',
          '@devoinc/genesys-brand-devo',
          '@storybook/addon-essentials/docs/mdx-react-shim',
          '@storybook/blocks',
          '@devoinc/genesys-ui',
          '@devoinc/genesys-ui-datetime',
          '@devoinc/genesys-ui-table',
          '@storybook/addon-actions',
          '@storybook/addon-docs',
          '@storybook/addon-docs/blocks',
          'styled-components',
          'lodash',
          '@devoinc/genesys-icons',
          'react-dock',
          'react-popper',
          'react-toastify',
          'react-select',
          'react-split',
          'ahooks',
          'react-windowed-select',
          '@dnd-kit/sortable',
          '@dnd-kit/utilities',
          '@dnd-kit/core',
          'react-grid-system',
          'react-dom/server',
          'react-select/creatable',
          'monaco-editor-core',
          'file-saver',
          'react-color',
          'date-fns',
          'date-fns/fp',
          'date-fns/locale',
          'react-filepond',
          'filepond-plugin-image-preview',
          'filepond-plugin-file-validate-type',
          'filepond-plugin-file-validate-size',
          '@devoinc/holo',
          '@tanstack/react-virtual',
          'date-fns-tz',
        ],
      },
    });
  },
  typescript: {
    // @ts-ignore
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      savePropValueAsString: true,
      // Required to show values from type declarations coming from node_modules.
      // Overrides the default value of `react-docgen-typescript` which is
      // '(prop) => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true'
      propFilter: () => true,
    },
    check: true,
  },
  staticDirs: ['assets'],
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
