import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

import { vitestConfig } from '../../common/vitest.config';

export default defineConfig({
  ...vitestConfig,
  resolve: {
    alias: {
      '@test': resolve(__dirname, '../../test/test-utils.tsx'),
    },
  },
});
