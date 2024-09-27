import { CSSProp } from 'styled-components';

import type { TAllColorScheme, TGlobalSpacing } from '../../declarations';

export interface IDivider {
  /** This property defines the status color schema for the divider */
  colorScheme?: TAllColorScheme;
  /** This property defines a custom color of the divider */
  customColor?: React.CSSProperties['color'];
  /** Vertical or horizontal Css margin, depending on the Divider is
   * vertical. */
  margin?: string | TGlobalSpacing;
  /** This property defines if the divider is vertical */
  vertical?: boolean;
  /** Css height */
  height?: React.CSSProperties['height'];
  /** Css width */
  width?: React.CSSProperties['width'];
}

export interface IDividerStyled {
  /** This property defines the status color schema for the divider */
  $colorScheme?: TAllColorScheme;
  /** This property defines a custom color of the divider */
  $customColor?: React.CSSProperties['color'];
  /** Vertical or horizontal Css margin, depending on the Divider is
   * vertical. */
  $margin?: string | TGlobalSpacing;
  /** This property defines if the divider is vertical */
  $vertical?: boolean;
  /** Css height */
  $height?: React.CSSProperties['height'];
  /** Css width */
  $width?: React.CSSProperties['width'];
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}
