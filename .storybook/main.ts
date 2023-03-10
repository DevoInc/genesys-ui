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
    // '@storybook/addon-interactions',
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
          '@devoinc/genesys-brand-devo',
          '@storybook/addon-essentials/docs/mdx-react-shim',
          '@storybook/blocks',
          '@devoinc/genesys-ui',
          '@devoinc/genesys-ui-datetime',
          '@devoinc/genesys-ui-form',
        ],
      },
    });
  },
  typescript: {
    //   /**
    //    * Solves TS extended declarations coming from node_modules not showing in SB
    //    * https://github.com/storybookjs/storybook/issues/12129
    //    * */
    //   reactDocgen: 'react-docgen-typescript',
    //   reactDocgenTypescriptOptions: {
    //     // this is required to show values from type declarations
    //     shouldExtractLiteralValuesFromEnum: true,
    //   },
    check: true,
  },
  staticDirs: ['assets'],
};

export default config;
