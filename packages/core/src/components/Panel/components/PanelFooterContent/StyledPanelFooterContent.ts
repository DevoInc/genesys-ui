import * as React from 'react';
import styled, { css } from 'styled-components';

import { PanelSize } from '../../declarations';
import { getPanelTokens } from '../../helpers';

export interface StyledPanelFooterContentProps {
  bottomContent: React.ReactElement;
  size: PanelSize;
  topContent: React.ReactElement;
}

export const StyledPanelFooterContent = styled.div<StyledPanelFooterContentProps>`
  ${({ bottomContent, size, theme, topContent }) => {
    const panelFooterTokens = getPanelTokens(theme).footer;

    return css`
      ${topContent || bottomContent
        ? null
        : css`
            display: flex;
            align-items: center;
          `};
      padding: ${!bottomContent &&
      !topContent &&
      panelFooterTokens.space.padding[size]};
    `;
  }}
`;

export const StyledPanelFooterContentTop = styled.div``;

export interface StyledPanelFooterContentMiddleProps {
  size: PanelSize;
}

export const StyledPanelFooterContentMiddle = styled.div<StyledPanelFooterContentMiddleProps>`
  ${({ size, theme }) => {
    const panelFooterTokens = getPanelTokens(theme).footer;

    return css`
      display: flex;
      align-items: center;
      padding: ${panelFooterTokens.space.padding[size]};
    `;
  }};
`;

export interface StyledPanelFooterContentPrependProps {
  size: PanelSize;
}

export const StyledPanelFooterContentPrepend = styled.div<StyledPanelFooterContentPrependProps>`
  ${({ size, theme }) => {
    const panelFooterTokensPrepend = getPanelTokens(theme).footerPrepend;

    return css`
      flex-shrink: 0;
      margin-right: ${panelFooterTokensPrepend.space.marginRight[size]};
    `;
  }};
`;

export const StyledPanelFooterContentBody = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

export const StyledPanelFooterContentBottom = styled.div``;
