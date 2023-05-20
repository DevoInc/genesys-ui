import * as React from 'react';
import { rgba } from 'polished';
import { css, DefaultTheme } from 'styled-components';

import { OverlayBgColorScheme } from './declarations';

import { isValidColor } from '../../styled/functions';

/**
 * Get background for the Overlay
 *
 * @param props Props object
 * @param props.bgColor Background color for the Overlay
 * @param props.bgColorScheme Background color scheme for the Overlay
 * @param props.bgGradient Background gradient for the Overlay
 * @param props.opacity Opacity of background for the Overlay
 * @param props.overlayBgTokens Overlay background-color design tokens
 * @return A string with the background (color or gradient)
 */
export const getOverlayBg = ({
  bgColor,
  bgColorScheme,
  bgGradient,
  opacity,
  overlayBgTokens,
}: {
  bgColor: React.CSSProperties['backgroundColor'];
  bgColorScheme: OverlayBgColorScheme;
  bgGradient: React.CSSProperties['background'];
  opacity: number;
  overlayBgTokens: DefaultTheme['cmp']['overlay']['color']['background'];
}) => {
  if (bgGradient) {
    return bgGradient;
  }

  if (bgColor && isValidColor(bgColor)) {
    return bgColor;
  }

  if (bgColorScheme === 'dark') {
    return typeof opacity === 'number'
      ? rgba(overlayBgTokens.dark.opaque, opacity)
      : overlayBgTokens.dark.opacity;
  }

  return typeof opacity === 'number'
    ? rgba(overlayBgTokens.light.opaque, opacity)
    : overlayBgTokens.light.opacity;
};

export interface OverlayMixinProps {
  /** Specific background color of the overlay */
  bgColor?: React.CSSProperties['backgroundColor'];
  /** Predefined the color scheme for the background */
  bgColorScheme?: OverlayBgColorScheme;
  /** Specific gradient background */
  bgGradient?: React.CSSProperties['background'];
  /** It defines if the position overlay is fixed  */
  fixed?: boolean;
  /** If the Overlay allows to interact with the elements behind it */
  hasInteractionBehind?: boolean;
  /** Opacity of the overlay (value between 0 and 1) */
  opacity?: number;
  theme: DefaultTheme;
}

/**
 * Get the custom Overlay styles applied to a Flex component.
 *
 * @return object with the css.
 */
export const overlayMixin = ({
  bgColor,
  bgColorScheme,
  bgGradient,
  fixed = false,
  hasInteractionBehind = false,
  opacity,
  theme,
}: OverlayMixinProps) => {
  const bgColorEval = getOverlayBg({
    bgColor,
    bgColorScheme,
    bgGradient,
    opacity,
    overlayBgTokens: theme.cmp.overlay.color.background,
  });

  return css`
    position: ${fixed ? 'fixed' : 'absolute'};
    inset: 0 0 0 0;
    width: 100%;
    height: 100%;
    background: ${bgColorEval};
    pointer-events: ${hasInteractionBehind && 'none'};
  `;
};
