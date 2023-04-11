import { defineConfig } from 'vite';
// Used from @storybook/react-vite dependencies
import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ command }) => ({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: command !== 'build',
              fileName: command !== 'build',
            },
          ],
        ],
      },
    }),
  ],
}));
