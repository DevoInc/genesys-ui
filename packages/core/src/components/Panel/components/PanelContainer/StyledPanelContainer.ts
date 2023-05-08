import * as React from 'react';
import styled, { css } from 'styled-components';

import { heightMixin, widthMixin } from '../../../../styled/';
import { getPanelTokens } from '../../helpers';
import { StyledBox, StyledBoxProps } from '../../../Box/StyledBox';

interface PanelHeightScheme {
  height?: React.CSSProperties['height'];
  minHeight?: React.CSSProperties['minHeight'];
  maxHeight?: React.CSSProperties['maxHeight'];
}

interface PanelWidthScheme {
  width?: React.CSSProperties['width'];
  minWidth?: React.CSSProperties['minWidth'];
  maxWidth?: React.CSSProperties['maxWidth'];
}

export interface StyledPanelContainerProps extends StyledBoxProps {
  bordered?: boolean;
  colorScheme?: React.CSSProperties['backgroundColor'];
  heightScheme?: PanelHeightScheme;
  widthScheme?: PanelWidthScheme;
}

export const StyledPanelContainer = styled(
  StyledBox
)<StyledPanelContainerProps>`
  ${({
    bordered,
    colorScheme,
    $display,
    elevation,
    heightScheme,
    theme,
    widthScheme,
  }) => {
    const aliasTokens = theme.alias;
    const borderColor = aliasTokens.color.border.surface.base.weak;
    const borderWidth = aliasTokens.shape.borderSize.panel.base;
    const panelTokens = getPanelTokens(theme);
    return css`
      ${$display !== 'none' &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `};
      ${widthScheme && widthMixin(widthScheme)};
      ${heightScheme && heightMixin(heightScheme)};
      overflow: hidden;
      border: ${bordered && `solid ${borderWidth} ${borderColor}`};
      border-radius: ${elevation &&
      elevation !== 'ground' &&
      !elevation.includes('sticky') &&
      panelTokens.shape.borderRadius};
      background-color: ${colorScheme || panelTokens.color.background};
    `;
  }};
`;
