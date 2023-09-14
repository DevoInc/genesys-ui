import { css, DefaultTheme } from 'styled-components';

import { Elevation } from '../../../declarations';

/**
 * Get the border-radius elevation styles based in the theme design tokens and
 * type
 */
export const elevationBorderRadiusMixin =
  (theme: DefaultTheme) => (elevation: Elevation) =>
    elevation && elevation !== 'ground' && !elevation.includes('sticky')
      ? css`
          border-radius: ${theme?.alias.shape.borderRadius.elevated};
        `
      : null;
