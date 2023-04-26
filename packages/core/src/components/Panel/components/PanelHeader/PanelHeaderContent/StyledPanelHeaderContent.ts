import * as React from 'react';
import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../../helpers';
import { PanelHeaderSize } from '../declarations';

export interface StyledPanelHeaderContentProps {
  bottomContent: React.ReactElement;
  size: PanelHeaderSize;
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

      &:empty {
        display: none;
      }
    `;
  }};
`;

export const StyledPanelHeaderContentTop = styled.div``;

export interface StyledPanelHeaderContentMiddleProps {
  size: PanelHeaderSize;
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
