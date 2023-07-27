import { css, DefaultTheme } from 'styled-components';
import { Elevation } from '../../declarations';

/* -------------------------------------------------------------------------- */
/*                                UTILS - MIXINS                              */
/* -------------------------------------------------------------------------- */

// Width and Height scheme - Utils - Mixin ----------------------------------- /
/**
 * Get the width styles based in a scheme object.
 *
 * @param {Object} scheme Object with width, min-width and max-width.
 * @return {css} the css width styles.
 */
export const widthMixin = (scheme) => css`
  width: ${scheme?.width};
  min-width: ${scheme?.minWidth};
  max-width: ${scheme?.maxWidth};
`;

/**
 * Get the height styles based in a scheme object.
 *
 * @param {Object} scheme Object with height, min-height and max-height.
 * @return {css} the css width styles.
 */
export const heightMixin = (scheme) => css`
  height: ${scheme?.height};
  min-height: ${scheme?.minHeight};
  max-height: ${scheme?.maxHeight};
`;

// Coordinates scheme - Utils - Mixin ----------------------------------------------- /

/**
 * Get the position coords styles.
 *
 * @param {Object} obj Object with the position coords.
 * @return {css} the css width styles.
 */
export const coordsMixin = (
  obj = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
) => css`
  top: ${obj.top};
  right: ${obj.right};
  bottom: ${obj.bottom};
  left: ${obj.left};
`;

// Screen readers only - Utils - Mixin --------------------------------------- /

export const srOnlyMixin = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

// Screen readers only focusable - Utils - Mixin ----------------------------- /
// hide the html element on screens, but not for screen readers and when its
// focused its shown again

export const srOnlyFocusableMixin = css`
  ${srOnlyMixin}
  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
  }
`;

// Pseudo element - Utils - Mixin -------------------------------------------- /

/**
 * Get the pseudo-element styles but generate an overlay.
 *
 * @param {Object} obj Object with the css values configuration.
 * @return {css} the css width styles.
 */
export const pseudoElementMixin = (obj) => css`
  content: ${obj && obj.content ? obj.content : '""'};
  display: ${obj && obj.display ? obj.display : 'block'};
  position: ${obj && obj.pos ? obj.pos : 'absolute'};
`;

// Pseudo Element Overlay - Utils - Mixin ------------------------------------ /

/**
 * Get the pseudo-element styles but generate an overlay.
 *
 * @param {Object} args Object with the pseudoElementMixin configuration.
 * @return {css} the css width styles.
 */
export const pseudoElementOverlayMixin = (args = {}) => css`
  ${pseudoElementMixin(args)};
  transition: all ease 0.15s;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

// Responsive image - Utils - Mixin ------------------------------------------ /

export const imgResponsiveMixin = css`
  display: block;
  max-width: 100%;
  height: auto;
`;

// Disabled - Utils - Mixin ------------------------------------------ /
/**
 * Get the generic disabled styles based in the theme design tokens.
 *
 * @param {Object} theme Object with with all the design tokens.
 * @return {object} the css with the styles object.
 */
export const disabledMixin = (theme) => css`
  opacity: ${theme.alias.shape.opacity.disabled};
  cursor: not-allowed;
  user-select: none;
`;

// Elevation - Utils - Mixin ------------------------------------------ /

interface ElevationMixinProps {
  theme: DefaultTheme;
  elevation: Elevation;
  prop?: 'boxShadow' | 'border' | 'borderRadius' | 'zIndex';
}

/**
 * /**
 *  * Get the generic elevation styles based in the theme design tokens and type.
 *  *
 *  * @param {String} elevation The elevation type.
 *  * @param {Object} theme Object with the theme configuration object and design tokens.
 *  * @param {Object} prop String to return a specific elevation style prop: boxShadow, border, borderRadius and zIndex.
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
  if (prop === 'boxShadow') return getBoxShadow();

  if (prop === 'borderRadius') return getBorderRadius();

  if (prop === 'border') return getBorder();

  if (prop === 'zIndex') return getZIndex();

  return css`
    ${getBoxShadow()};
    ${getBorderRadius()};
    ${getBorder()};
    ${getZIndex()};
  `;
};
