import * as React from 'react';
import { rgba } from 'polished';

import { Brand } from '@devoinc/genesys-brand-devo';

import { isValidColor } from '../../styled/functions';
import { OverlayBgColorScheme } from './declarations';

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
  overlayBgTokens: Brand['cmp']['overlay']['color']['background'];
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
