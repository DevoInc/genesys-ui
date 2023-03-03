import {
  UIColorScheme,
  BaseSize,
  BlendColorScheme,
  NeutralColorScheme,
} from '../../declarations';

export type ButtonIconPosition = 'left' | 'right';

export type ButtonColorScheme =
  | BlendColorScheme
  | NeutralColorScheme
  | UIColorScheme
  | 'accent'
  | 'accent-high'
  | 'quiet';

export type ButtonBasicState =
  | 'disabled'
  | 'enabled'
  | 'focused'
  | 'hovered'
  | 'pressed';

export type ButtonActionState =
  | ButtonBasicState
  | 'expanded'
  | 'loading'
  | 'loading-error'
  | 'loading-success';

export type ButtonSelectableState = ButtonBasicState | 'selected';

export type ButtonExpandableState = ButtonBasicState | 'expanded';

export type ButtonState =
  | ButtonActionState
  | ButtonSelectableState
  | ButtonExpandableState;

export type ButtonSize = BaseSize | 'xxs' | 'xs';

export type ButtonLoaderSize = BaseSize | 'xs';
