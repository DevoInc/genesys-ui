import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    extends: './vitest.config.ts',
    test: {
      name: 'core',
      root: 'packages/core',
    },
  },
  //{
  //  extends: './vitest.config.ts',
  //  test: {
  //    name: 'code',
  //    root: 'packages/code',
  //  },
  //},
  {
    extends: './vitest.config.ts',
    test: {
      name: 'datetime',
      root: 'packages/datetime',
    },
  },
  //{
  //  extends: './vitest.config.ts',
  //  test: {
  //    name: 'color',
  //    root: 'packages/color',
  //  },
  //},
  //{
  //  extends: './vitest.config.ts',
  //  test: {
  //    name: 'upload',
  //    root: 'packages/upload',
  //  },
  //},
  {
    extends: './vitest.config.ts',
    test: {
      name: 'table',
      root: 'packages/table',
    },
  },
]);
