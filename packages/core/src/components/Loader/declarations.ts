import { TGlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ContextualScrollLoaderSize = PickUnion<TGlobalSize, 'md' | 'lg'>;
export type ContextualScrollLoaderType = 'progress' | 'spinner';
export type LoaderBasicColorScheme = 'dark' | 'light';
export type LoaderColorScheme = LoaderBasicColorScheme | 'inherited';
export type LoaderSize = 'md' | 'sm';
export type TLoaderGradientPosition = 'top' | 'right' | 'bottom' | 'left';
