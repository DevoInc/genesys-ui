import type { TBadgeColorScheme, TBadgeSize } from '../../declarations';

export interface IBadgeContainer {
  /** Size to define padding, line-height, font-size... etc. of the Badge. */
  size?: TBadgeSize;
  /** If the color scheme is inverse: text color becomes background color and vice versa */
  inverse?: boolean;
  /** If the badge is used with position absolute inside another component
   * as a marker */
  hasAbsolutePosition?: boolean;
  /** If the component has an icon as content.*/
  hasIcon?: boolean;
  /** It defines the color schema for the background and text color.
   * There are predefined types: primary, secondary... etc.
   * It's possible to use a custom color used for the background color and
   * auto-generated for the text based on this one to maintain AA accessible contrast.*/
  colorScheme?: TBadgeColorScheme | React.CSSProperties['backgroundColor'];
  /** Tooltip on Badge hover.*/
  tooltip?: string;
}
