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
