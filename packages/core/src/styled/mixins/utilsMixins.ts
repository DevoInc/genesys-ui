import * as React from 'react';
import { css } from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                                UTILS - MIXINS                              */
/* -------------------------------------------------------------------------- */

// Flex - Utils - Mixin ------------------------------------------------------ /
/**
 * Get the flex styles based in a scheme object.
 *
 * @param {Object} scheme Object with display, flex-direction, justify-content,
 * align-items, align-content and flex-wrap.
 * @return {css} the css flex styles.
 */
export const flexMixin = ({
  dis,
  dir,
  jc,
  ai,
  ac,
  wrap,
}: {
  dis?: React.CSSProperties['display'];
  dir?: React.CSSProperties['flexDirection'];
  jc?: React.CSSProperties['justifyContent'];
  ai?: React.CSSProperties['alignItems'];
  ac?: React.CSSProperties['alignContent'];
  wrap?: React.CSSProperties['flexWrap'];
} = {}) => css`
  display: ${dis};
  flex-direction: ${dir};
  justify-content: ${jc};
  align-items: ${ai};
  align-content: ${ac};
  flex-wrap: ${wrap};
`;

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
 * @param {Object} tokens Object with with all the design tokens.
 * @return {object} the css with the styles object.
 */
export const disabledMixin = ({ tokens }) => css`
  opacity: ${tokens.alias.shape.opacity.disabled};
  cursor: not-allowed;
  user-select: none;
`;
