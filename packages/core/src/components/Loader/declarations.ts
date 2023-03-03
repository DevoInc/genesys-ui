import { BaseSize, GlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ContextualScrollLoaderSize = PickUnion<GlobalSize, 'md' | 'lg'>;
export type ContextualScrollLoaderType = 'progress' | 'spinner';

export type ContextualLoader = 'logo' | 'spinner';

export type LoaderColorScheme = 'dark' | 'light';
export type LoaderSize = BaseSize | PickUnion<GlobalSize, 'xs'>;
export type LoaderType = ContextualLoader | 'progress';

export interface GradientConfig {
  height?: string;
}
