import * as React from 'react';
import styled, { css } from 'styled-components';

import { PanelSize } from '../../../declarations';
import { getPanelTokens } from '../../../helpers';

export interface StyledPanelHeaderContentProps {
  bottomContent: React.ReactElement;
  size: PanelSize;
  subtitle: string;
  topContent: React.ReactElement;
}

export const StyledPanelHeaderContent = styled.div<StyledPanelHeaderContentProps>`
  ${({ bottomContent, size, subtitle, theme, topContent }) => {
    const tokensPanelHeader = getPanelTokens(theme).header;

    return css`
      ${topContent || bottomContent
        ? null
        : css`
            display: flex;
            align-items: ${subtitle ? 'flex-start' : 'center'};
          `};
      padding: ${!bottomContent &&
      !topContent &&
      tokensPanelHeader.space.padding[size]};
    `;
  }};
`;

export const StyledPanelHeaderContentTop = styled.div``;

export interface StyledPanelHeaderContentMiddleProps {
  size: PanelSize;
}

export const StyledPanelHeaderContentMiddle = styled.div<StyledPanelHeaderContentMiddleProps>`
  ${({ size, theme }) => {
    const tokensPanelHeader = getPanelTokens(theme).header;

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${tokensPanelHeader.space.padding[size]};
    `;
  }};
`;

export const StyledPanelHeaderContentBottom = styled.div``;
