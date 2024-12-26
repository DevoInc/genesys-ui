import { defineConfig } from 'tsup';

import { tsupConfig } from '../../common/tsup.config';

export default defineConfig({
  ...tsupConfig,
  entry: ['src/index.ts'],
  dts: false,
});
