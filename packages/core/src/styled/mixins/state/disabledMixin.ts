import { type DefaultTheme, css } from 'styled-components';

/**
 * Get the generic disabled styles based in the theme design tokens
 */
export const disabledMixin = (theme: DefaultTheme) => css`
  opacity: ${theme.alias.shape.opacity.disabled};
  cursor: not-allowed;
  user-select: none;
`;
