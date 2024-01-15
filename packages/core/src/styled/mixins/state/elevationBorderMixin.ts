import { css, DefaultTheme } from 'styled-components';

import { Elevation } from '../../../declarations';

/**
 * Get the border elevation styles based in the theme design tokens and type
 */
export const elevationBorderMixin =
  (theme: DefaultTheme) => (elevation: Elevation) => {
    const elevations = theme.alias.color.border.elevation;
    const elevationBorder = theme.alias.shape.borderSize.panel.base;
    return !elevation || elevation === 'ground'
      ? null
      : elevation?.startsWith('sticky')
        ? elevation === 'stickyTop'
          ? css`
              border-top: ${elevationBorder} solid ${elevations.sticky.top};
            `
          : elevation === 'stickyRight'
            ? css`
                border-right: ${elevationBorder} solid
                  ${elevations.sticky.right};
              `
            : elevation === 'stickyLeft'
              ? css`
                  border-left: ${elevationBorder} solid
                    ${elevations.sticky.left};
                `
              : elevation === 'stickyBottom'
                ? css`
                    border-bottom: ${elevationBorder} solid
                      ${elevations.sticky.bottom};
                  `
                : null
        : Object.keys(elevations).includes(elevation)
          ? css`
              border: ${elevationBorder} solid ${elevations[elevation]};
            `
          : null;
  };
