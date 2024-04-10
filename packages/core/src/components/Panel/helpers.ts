import * as React from 'react';
import { css, DefaultTheme } from 'styled-components';

import type { BoxProps } from '../Box';

import { pseudoElementOverlayMixin } from '../../styled';

export interface PanelMixinProps
  extends Pick<BoxProps, 'display' | 'elevation'> {
  bordered?: boolean;
  colorScheme?: React.CSSProperties['backgroundColor'];
  theme: DefaultTheme;
}

/**
 * Get the Panel custom styles applied to a Box component.
 *
 * @return object with the css.
 */
export const panelMixin = ({
  bordered,
  colorScheme,
  display,
  elevation,
  theme,
}: PanelMixinProps) => {
  const aliasTokens = theme.alias;
  // TODO: Add border-color token to Panel component QUV-2018
  const borderColor = aliasTokens.color.border.surface.base.weak;
  const borderWidth = aliasTokens.shape.borderSize.panel.base;
  const panelTokens = theme.cmp.panel;
  const borderRadius =
    elevation &&
    elevation !== 'ground' &&
    !elevation.includes('sticky') &&
    panelTokens.shape.borderRadius;
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
    background-color: ${panelTokens.color.background};

    &::before {
      ${pseudoElementOverlayMixin()};
      border-radius: ${borderRadius};
      background-color: ${colorScheme};
    }
  `;
};
