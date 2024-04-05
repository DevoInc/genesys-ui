import { css, type DefaultTheme } from 'styled-components';

import type { TElevation } from '../../../declarations';

/**
 * Get the z-index elevation styles based in the theme design tokens and type
 */
export const elevationZIndexMixin =
  (theme: DefaultTheme) => (elevation: TElevation) => css`
    z-index: ${theme?.alias?.elevation?.zIndex?.depth[elevation]};
  `;
