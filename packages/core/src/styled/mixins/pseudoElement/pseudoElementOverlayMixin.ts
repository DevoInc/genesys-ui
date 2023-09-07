import { css } from 'styled-components';

import { pseudoElementMixin } from './pseudoElementMixin';

/**
 * Get the pseudo-element styles but generate an overlay.
 *
 * @param args Object with the pseudoElementMixin configuration.
 * @return the css width styles.
 */
export const pseudoElementOverlayMixin = (args = {}) => css`
  ${pseudoElementMixin(args)};
  transition: all ease 0.15s;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;
