import { css, DefaultTheme } from 'styled-components';

import { Elevation } from '../../../declarations';
import { elevationBoxShadowMixin } from './elevationBoxShadowMixin';
import { elevationBorderMixin } from './elevationBorderMixin';
import { elevationBorderRadiusMixin } from './elevationBorderRadiusMixin';
import { elevationZIndexMixin } from './elevationZIndexMixin';

/**
 * Get the generic elevation styles based in the theme design tokens and type
 */
export const elevationMixin =
  (theme: DefaultTheme) => (elevation: Elevation) =>
    elevation
      ? css`
          ${elevationBoxShadowMixin(theme)(elevation)};
          ${elevationBorderRadiusMixin(theme)(elevation)};
          ${elevationBorderMixin(theme)(elevation)};
          ${elevationZIndexMixin(theme)(elevation)};
        `
      : null;
