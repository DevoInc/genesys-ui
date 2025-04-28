import * as React from 'react';

import type { TFeedbackColorScheme, TFeedbackSize } from '../../declarations';

export type TTagSize = TFeedbackSize | 'xs';

export interface ITag {
  /** It defines the color scheme for the background and text color.
   * There are predefined types: primary, secondary... etc.
   * It's possible to use a custom color used for the background color and
   * auto-generated for the text based on this one to maintain AA accessible contrast.*/
  colorScheme?: TFeedbackColorScheme | React.CSSProperties['backgroundColor'];
  /** Defines if the tag content is bold */
  bold?: boolean;
  /** Defines if the tag has background color or use a marker */
  quiet?: boolean;
  /** It Defines if the tag spans the full width of its parent */
  wide?: boolean;
  /** Size to define padding, line-height, font-size... etc. of the Tag. */
  size?: TTagSize;
}
