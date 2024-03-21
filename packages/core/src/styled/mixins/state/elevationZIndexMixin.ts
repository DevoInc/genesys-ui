import { css, DefaultTheme } from 'styled-components';

import { TElevation } from '../../../declarations';

/**
 * Get the z-index elevation styles based in the theme design tokens and type
 */
export const elevationZIndexMixin =
  (theme: DefaultTheme) => (elevation: TElevation) => css`
    z-index: ${theme?.alias?.elevation?.zIndex?.depth[elevation]};
  `;
