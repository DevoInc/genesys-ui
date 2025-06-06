import type {
  TUIColorScheme,
  TBaseSize,
  TBlendColorScheme,
  TNeutralColorScheme,
} from '../../declarations';

export type TButtonIconPosition = 'left' | 'right';

export type TButtonColorScheme =
  | TBlendColorScheme
  | TNeutralColorScheme
  | TUIColorScheme
  | 'accent'
  | 'accent-high'
  | 'quiet'
  | 'quiet-blend';

export type TButtonBasicState =
  | 'disabled'
  | 'enabled'
  | 'focused'
  | 'hovered'
  | 'pressed';

export type TButtonActionState =
  | TButtonBasicState
  | 'expanded'
  | 'loading'
  | 'loading-error'
  | 'loading-success';

export type TButtonSelectableState = TButtonBasicState | 'selected';

export type TButtonExpandableState = TButtonBasicState | 'expanded';

export type TButtonState =
  | TButtonActionState
  | TButtonSelectableState
  | TButtonExpandableState;

export type TButtonSize = TBaseSize | 'xxs' | 'xs';

export type TButtonLoaderSize = TBaseSize | 'xs';
