import { PickUnion } from '../../typeFunctions';
import type { TGlobalSize, TUIColorScheme } from '../../declarations';

export type TSpinnerColorScheme =
  | TUIColorScheme
  | 'brand'
  | 'dark'
  | 'darkTrans'
  | 'light'
  | 'lightTrans';

export type TSpinnerSize = PickUnion<
  TGlobalSize,
  'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
>;
