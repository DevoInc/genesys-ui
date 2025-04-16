import type { Options } from 'tsup';
import styledComponentsPlugin from 'esbuild-plugin-styled-components';

export const tsupConfig: Options = {
  // Here is the plugin for that allow us to use the
  // styled-components CSS prop properly
  // https://github.com/appzic/esbuild-plugin-styled-components
  esbuildPlugins: [
    styledComponentsPlugin({
      displayName: true,
      fileName: false,
      pure: true,
    }),
  ],
  // silent: true,
  clean: true,
  dts: true,
  minify: 'terser',
  sourcemap: true,
  format: ['esm', 'cjs'],
  metafile: true,
  // The optimization of treeshake is having a conflict with the
  // esbuild-plugin-styled-components so we can't use the next prop
  // treeshake: true,
};
