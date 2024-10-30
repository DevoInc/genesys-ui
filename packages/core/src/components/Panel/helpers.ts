import * as React from 'react';
import { css, DefaultTheme } from 'styled-components';

import type { BoxProps } from '../Box';
import { pseudoElementOverlayMixin } from '../../styled';
import { getTokenKeyFromColorScheme } from '../../helpers';

export interface PanelMixinProps
  extends Pick<BoxProps, 'display' | 'elevation'> {
  bordered?: boolean;
  colorScheme?: React.CSSProperties['backgroundColor'];
}

/**
 * Get the Panel custom styles applied to a Box component.
 *
 * @return object with the css.
 */
export const panelMixin =
  (theme: DefaultTheme) =>
  ({ bordered, colorScheme, display, elevation }: PanelMixinProps) => {
    const elevationForTokens = getTokenKeyFromColorScheme(elevation);
    const tokens = theme.cmp.panel;
    const borderColor = tokens.color.border[elevationForTokens];
    const borderWidth = tokens.shape.borderSize;
    const borderRadius =
      elevation &&
      elevation !== 'ground' &&
      !elevation.includes('sticky') &&
      tokens.shape.borderRadius;
    return css`
      position: relative;
      ${display !== 'none' &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `};
      border: ${elevation === 'ground' &&
      bordered &&
      `solid ${borderWidth} ${borderColor}`};
      // to maintain always a solid background to avoid overlapping problems
      background-color: ${tokens.color.background};

      &::before {
        ${pseudoElementOverlayMixin()};
        border-radius: ${borderRadius};
        background-color: ${colorScheme};
      }
    `;
  };
