import type { TGlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type TContextualScrollLoaderSize = PickUnion<TGlobalSize, 'md' | 'lg'>;
export type TContextualScrollLoaderType = 'progress' | 'spinner';
export type TLoaderBasicColorScheme = 'dark' | 'light';
export type TLoaderColorScheme = TLoaderBasicColorScheme | 'inherited';
export type TLoaderSize = 'md' | 'sm';
export type TLoaderGradientPosition = 'top' | 'right' | 'bottom' | 'left';
