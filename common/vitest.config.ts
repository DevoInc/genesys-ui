import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

export const vitestConfig = {
  // Here is the plugin for React that allow us to use the babel plugin for
  // styled-components and test the CSS prop output properly
  // https://styled-components.com/docs/tooling#babel-plugin
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              //displayName: command !== 'build',
              //fileName: command !== 'build',
            },
          ],
        ],
      },
    }),
  ],
  test: {
    environment: 'happy-dom',
    include: ['{src,stories}/**/*.test.ts?(x)'],
    coverage: {
      provider: 'v8',
      include: ['{src,stories}/**/*'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'storybook-static/**/*',
        '**/*.stories.tsx',
      ],
    },
  },
};
