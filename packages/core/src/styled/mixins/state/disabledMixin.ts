import { css } from 'styled-components';

/**
 * Get the generic disabled styles based in the theme design tokens.
 *
 * @param theme Object with with all the design tokens.
 * @return the css with the styles object.
 */
export const disabledMixin = (theme) => css`
  opacity: ${theme.alias.shape.opacity.disabled};
  cursor: not-allowed;
  user-select: none;
`;
