import { css, DefaultTheme } from 'styled-components';

import type { TElevation } from '../../../declarations';

/**
 * Get the box-shadow elevation styles based in the theme design tokens and type
 */
export const elevationBoxShadowMixin =
  (theme: DefaultTheme) => (elevation: TElevation) => {
    const boxShadowTokens = theme?.alias?.elevation.boxShadow;
    return elevation
      ? css`
          box-shadow: ${elevation.startsWith('sticky')
            ? elevation === 'stickyBottom'
              ? boxShadowTokens.depth.sticky.bottom
              : elevation === 'stickyLeft'
                ? boxShadowTokens.depth.sticky.left
                : elevation === 'stickyRight'
                  ? boxShadowTokens.depth.sticky.right
                  : elevation === 'stickyTop'
                    ? boxShadowTokens.depth.sticky.top
                    : ''
            : boxShadowTokens.depth[elevation]};
        `
      : null;
  };
