import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../packages/*/src/**/*.stories.@(ts|tsx)',
    '../packages/*/src/**/*.mdx',
    // TODO: configure SB to serve these HTML files, too:
    // '../packages/**/depcruise.html',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
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
          '@devoinc/genesys-tokens-types',
          '@storybook/addon-essentials/docs/mdx-react-shim',
          '@storybook/blocks',
          '@devoinc/genesys-ui',
          '@devoinc/genesys-ui-datetime',
          '@devoinc/genesys-ui-form',
          '@devoinc/genesys-ui-table',
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
