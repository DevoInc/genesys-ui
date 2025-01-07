import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import react from '@vitejs/plugin-react';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../packages/*/@(src|stories)/**/*.@(stories.ts|stories.tsx|mdx)',
  ],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-actions',
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
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/preset-scss',
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
                },
              ],
            ],
          },
        }),
      ],
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          '@devoinc/genesys-brand-devo',
          '@storybook/addon-actions',
          '@storybook/addon-docs',
          '@storybook/addon-docs/blocks',
          '@storybook/addon-themes',
          '@storybook/blocks',
          '@storybook/theming',
          '@storybook/components',
          'styled-components',
          'lodash',
          'js-cookie',
          '@devoinc/genesys-icons',
          'react-dock',
          'react-popper',
          'react-toastify',
          'react-select',
          'ahooks',
          'react-windowed-select',
          '@dnd-kit/sortable',
          '@dnd-kit/utilities',
          '@dnd-kit/modifiers',
          '@dnd-kit/core',
          'react-grid-system',
          'react-dom/server',
          'react-select/creatable',
          'monaco-editor-core',
          'file-saver',
          'react-color',
          'date-fns',
          'framer-motion',
          'date-fns/fp',
          'date-fns/locale',
          'react-filepond',
          'filepond-plugin-image-preview',
          'filepond-plugin-file-validate-type',
          'filepond-plugin-file-validate-size',
          '@devoinc/holo',
          '@tanstack/react-virtual',
          '@date-fns/tz',
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
