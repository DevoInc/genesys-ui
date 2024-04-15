import { css } from 'styled-components';
import type { IPseudoMixin } from './declarations';
import { PSEUDO_MIXIN_DEFAULT_PARAMS } from './constants';

/**
 * Get the pseudo-element styles but generate an overlay.
 *
 * @param obj Object with the css values configuration.
 * @return the css width styles.
 */
export const pseudoElementMixin = ({
  content,
  display,
  pos,
}: IPseudoMixin = PSEUDO_MIXIN_DEFAULT_PARAMS) => {
  return css`
    content: ${content ?? ''};
    display: ${display};
    position: ${pos};
  `;
};
