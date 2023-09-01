import { css, DefaultTheme } from 'styled-components';

import { Elevation } from '../../../declarations';

interface ElevationMixinProps {
  theme: DefaultTheme;
  elevation: Elevation;
  prop?: 'boxShadow' | 'border' | 'borderRadius' | 'zIndex';
}

/**
 * /**
 *  * Get the generic elevation styles based in the theme design tokens and type.
 *  *
 *  * @param elevation The elevation type.
 *  * @param theme Object with the theme configuration object and design tokens.
 *  * @param prop String to return a specific elevation style prop: boxShadow, border, borderRadius and zIndex.
 */
export const elevationMixin = ({
  theme,
  elevation,
  prop,
}: ElevationMixinProps) => {
  if (!elevation) return null;
  const aliasTokens = theme?.alias;
  const elevationTokens = theme?.alias?.elevation;

  const getBoxShadow = () => {
    const boxShadowTokens = elevationTokens.boxShadow;
    if (!boxShadowTokens) return null;

    let boxShadowValue = boxShadowTokens.depth[elevation] || null;

    if (elevation?.includes('sticky')) {
      const stickyElevationTokens = boxShadowTokens.depth.sticky;
      boxShadowValue = stickyElevationTokens.bottom;
      if (elevation === 'stickyTop') boxShadowValue = stickyElevationTokens.top;
      if (elevation === 'stickyRight')
        boxShadowValue = stickyElevationTokens.right;
      if (elevation === 'stickyLeft')
        boxShadowValue = stickyElevationTokens.left;
    }

    return css`
      box-shadow: ${boxShadowValue};
    `;
  };

  const getBorderRadius = () => {
    const hasBorderRadius =
      elevation && elevation !== 'ground' && !elevation.includes('sticky');

    if (!hasBorderRadius) return null;

    return css`
      border-radius: ${aliasTokens.shape.borderRadius.elevated};
    `;
  };

  const getBorder = () => {
    if (elevation === 'ground') return null;

    let borderProp = 'border';
    let borderValue = aliasTokens.color.border.elevation[elevation];

    if (elevation?.includes('sticky')) {
      const stickyBorderTokens = aliasTokens.color.border.elevation.sticky;
      borderProp = 'border-bottom';
      borderValue = stickyBorderTokens.bottom;

      if (elevation === 'stickyTop') {
        borderProp = 'border-top';
        borderValue = stickyBorderTokens.top;
      }
      if (elevation === 'stickyRight') {
        borderProp = 'border-right';
        borderValue = stickyBorderTokens.right;
      }
      if (elevation === 'stickyLeft') {
        borderProp = 'border-left';
        borderValue = stickyBorderTokens.left;
      }
    }
    return css`
      ${borderProp}: .1rem solid ${borderValue}
    `;
  };

  const getZIndex = () => {
    return css`
      z-index: ${elevationTokens.zIndex?.depth[elevation]};
    `;
  };

  return prop === 'boxShadow'
    ? getBoxShadow()
    : prop === 'borderRadius'
    ? getBorderRadius()
    : prop === 'border'
    ? getBorder()
    : prop === 'zIndex'
    ? getZIndex()
    : css`
        ${getBoxShadow()};
        ${getBorderRadius()};
        ${getBorder()};
        ${getZIndex()};
      `;
};
