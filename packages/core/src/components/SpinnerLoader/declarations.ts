import { PickUnion } from '../../typeFunctions';
import { GlobalSize, UIColorScheme } from '../../declarations';

export type TSpinnerColorScheme =
  | UIColorScheme
  | 'brand'
  | 'dark'
  | 'darkTrans'
  | 'light'
  | 'lightTrans';

export type TSpinnerSize = PickUnion<
  GlobalSize,
  'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
>;
