import {
  TUIColorScheme,
  TBaseSize,
  TBlendColorScheme,
  TNeutralColorScheme,
} from '../../declarations';

export type ButtonIconPosition = 'left' | 'right';

export type ButtonColorScheme =
  | TBlendColorScheme
  | TNeutralColorScheme
  | TUIColorScheme
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

export type ButtonSize = TBaseSize | 'xxs' | 'xs';

export type ButtonLoaderSize = TBaseSize | 'xs';
