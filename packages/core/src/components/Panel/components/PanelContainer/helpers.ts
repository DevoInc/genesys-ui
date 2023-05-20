import * as React from 'react';
import { css, DefaultTheme } from 'styled-components';

import { BoxProps } from '../../../Box';

import { getPanelTokens } from '../../helpers';
import {
  heightMixin,
  pseudoElementOverlayMixin,
  widthMixin,
} from '../../../../styled';

interface PanelHeightScheme {
  height?: BoxProps['height'];
  minHeight?: BoxProps['minHeight'];
  maxHeight?: BoxProps['maxHeight'];
}

interface PanelWidthScheme {
  width?: BoxProps['width'];
  minWidth?: BoxProps['minWidth'];
  maxWidth?: BoxProps['maxWidth'];
}

export interface PanelContainerMixinProps extends BoxProps {
  bordered?: boolean;
  colorScheme?: React.CSSProperties['backgroundColor'];
  heightScheme?: PanelHeightScheme;
  widthScheme?: PanelWidthScheme;
  theme: DefaultTheme;
}

/**
 * Get the PanelContainer custom styles applied to a Box component.
 *
 * @return object with the css.
 */
export const panelContainerMixin = ({
  bordered,
  colorScheme,
  display,
  elevation,
  heightScheme,
  theme,
  widthScheme,
}: PanelContainerMixinProps) => {
  const aliasTokens = theme.alias;
  const borderColor = aliasTokens.color.border.surface.base.weak;
  const borderWidth = aliasTokens.shape.borderSize.panel.base;
  const panelTokens = getPanelTokens(theme);
  const borderRadius =
    elevation &&
    elevation !== 'ground' &&
    !elevation.includes('sticky') &&
    panelTokens.shape.borderRadius;
  return css`
    ${display !== 'none' &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `};
    ${widthScheme && widthMixin(widthScheme)};
    ${heightScheme && heightMixin(heightScheme)};
    overflow: hidden;
    border: ${bordered && `solid ${borderWidth} ${borderColor}`};
    border-radius: ${borderRadius};
    // to maintain always a solid background to avoid overlapping problems
    background-color: ${panelTokens.color.background};

    &::before {
      ${pseudoElementOverlayMixin};
      border-radius: ${borderRadius};
      background-color: ${colorScheme};
    }
  `;
};
