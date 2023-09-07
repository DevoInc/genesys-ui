import { css } from 'styled-components';

/**
 * Get the pseudo-element styles but generate an overlay.
 *
 * @param obj Object with the css values configuration.
 * @return the css width styles.
 */
export const pseudoElementMixin = (obj) => css`
  content: ${obj && obj.content ? obj.content : '""'};
  display: ${obj && obj.display ? obj.display : 'block'};
  position: ${obj && obj.pos ? obj.pos : 'absolute'};
`;
