import { css, DefaultTheme } from 'styled-components';

import { Elevation } from '../../../declarations';

/**
 * Get the border elevation styles based in the theme design tokens and type
 */
export const elevationBorderMixin =
  (theme: DefaultTheme) => (elevation: Elevation) => {
    const elevations = theme.alias.color.border.elevation;
    return !elevation || elevation === 'ground'
      ? null
      : elevation?.startsWith('sticky')
      ? elevation === 'stickyTop'
        ? css`
            border-top: 0.1rem solid ${elevations.sticky.top};
          `
        : elevation === 'stickyRight'
        ? css`
            border-right: 0.1rem solid ${elevations.sticky.right};
          `
        : elevation === 'stickyLeft'
        ? css`
            border-left: 0.1rem solid ${elevations.sticky.left};
          `
        : elevation === 'stickyBottom'
        ? css`
            border-bottom: 0.1rem solid ${elevations.sticky.bottom};
          `
        : null
      : Object.keys(elevations).includes(elevation)
      ? css`
          border: 0.1rem solid ${elevations[elevation]};
        `
      : null;
  };
