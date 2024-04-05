import { css, type DefaultTheme } from 'styled-components';

import type { TElevation } from '../../../declarations';
import { getTemplate } from './elevationBorderMixinTemplate';

/**
 * Get the border elevation styles based in the theme design tokens and type
 */
export const elevationBorderMixin =
  (theme: DefaultTheme) => (elevation: TElevation) => {
    const elevations = theme.alias.color.border.elevation;
    const colorMap = {
      stickyTop: { color: elevations.sticky.top, side: 'top' },
      stickyRight: { color: elevations.sticky.right, side: 'right' },
      stickyLeft: { color: elevations.sticky.left, side: 'left' },
      stickyBottom: { color: elevations.sticky.bottom, side: 'bottom' },
    };
    const elevationBorder = theme.alias.shape.borderSize.panel.base;
    return !elevation || elevation === 'ground'
      ? null
      : elevation?.startsWith('sticky')
        ? Object.keys(colorMap).includes(elevation)
          ? getTemplate(
              colorMap[elevation].side,
              elevationBorder,
              colorMap[elevation].color,
            )
          : null
        : Object.keys(elevations).includes(elevation)
          ? css`
              border: ${elevationBorder} solid ${elevations[elevation]};
            `
          : null;
  };
