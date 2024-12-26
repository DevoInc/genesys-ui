import type { Options } from 'tsup';
import styledComponentsPlugin from 'esbuild-plugin-styled-components';

export const tsupConfig: Options = {
  // Here is the plugin for that allow us to use the
  // styled-components CSS prop properly
  // https://github.com/appzic/esbuild-plugin-styled-components
  esbuildPlugins: [styledComponentsPlugin({})],
  sourcemap: true,
  clean: true,
  dts: true,
  minify: 'terser',
  format: ['esm', 'cjs'],
  metafile: true,
  treeshake: true,
  // silent: true,
};
