import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
  },
});

