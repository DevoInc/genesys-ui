import * as React from 'react';

export type TOverlayBgColorScheme = 'dark' | 'light';

export interface IOverlay {
  /** Specific background color of the overlay */
  bgColor?: React.CSSProperties['backgroundColor'];
  /** Predefined the color scheme for the background */
  bgColorScheme?: TOverlayBgColorScheme;
  /** Specific gradient background */
  bgGradient?: React.CSSProperties['background'];
  /** It defines if the position overlay is fixed  */
  fixed?: boolean;
  /** If the Overlay allows to interact with the elements behind it */
  hasInteractionBehind?: boolean;
  /** Opacity of the overlay (value between 0 and 1) */
  opacity?: number;
}
