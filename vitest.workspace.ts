import { defineWorkspace } from 'vitest/config';
import { resolve } from 'node:path';

export default defineWorkspace([
  {
    extends: './vitest.config.ts',
    test: {
      name: 'code',
      root: 'packages/code',
      setupFiles: [resolve(__dirname, './vitest.setup.ts')],
      alias: {
        'monaco-editor-core': resolve(
          __dirname,
          './node_modules/monaco-editor-core/esm/vs/editor/editor.main',
        ),
      },
      deps: { optimizer: { web: { include: ['vitest-canvas-mock'] } } },
      poolOptions: { threads: { singleThread: true } },
    },
  },
  {
    extends: './vitest.config.ts',
    test: { name: 'color', root: 'packages/color' },
  },
  {
    extends: './vitest.config.ts',
    test: { name: 'core', root: 'packages/core' },
  },
  {
    extends: './vitest.config.ts',
    test: { name: 'datetime', root: 'packages/datetime' },
  },
  {
    extends: './vitest.config.ts',
    test: { name: 'table', root: 'packages/table' },
  },
  // {
  //   extends: './vitest.config.ts',
  //   test: { name: 'upload', root: 'packages/upload',
  //     alias: {
  //       'react-filepond': resolve(
  //         __dirname,
  //         './node_modules/react-filepond/dist/react-filepond.esm',
  //       ),
  //     },
  //   },
  // },
]);
