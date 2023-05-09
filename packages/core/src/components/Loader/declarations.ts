import { BaseSize, GlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ContextualScrollLoaderSize = PickUnion<GlobalSize, 'md' | 'lg'>;
export type ContextualScrollLoaderType = 'progress' | 'spinner';

export type ContextualLoaderType = 'progress' | 'spinner';

export type LoaderBasicColorScheme = 'dark' | 'light';
export type LoaderColorScheme = LoaderBasicColorScheme | 'inherited';
export type LoaderSize = BaseSize | PickUnion<GlobalSize, 'xs'>;
export type LoaderType = ContextualLoaderType | 'logo';

export interface GradientConfig {
  height?: string;
}
