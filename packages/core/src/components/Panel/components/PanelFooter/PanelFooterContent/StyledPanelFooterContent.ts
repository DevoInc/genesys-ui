import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../../helpers';
import { PanelFooterSize } from '../declarations';

export interface StyledPanelFooterContentProps {
  hasBottomContent: boolean;
  size: PanelFooterSize;
  hasTopContent: boolean;
}

export const StyledPanelFooterContent = styled.div<StyledPanelFooterContentProps>`
  ${({ hasBottomContent, size, theme, hasTopContent }) => {
    const panelFooterTokens = getPanelTokens(theme).footer;

    return css`
      ${hasTopContent || hasBottomContent
        ? null
        : css`
            display: flex;
            align-items: center;
          `};
      padding: ${!hasBottomContent &&
      !hasTopContent &&
      panelFooterTokens.space.padding[size]};
    `;
  }}
`;

export const StyledPanelFooterContentTop = styled.div``;

export interface StyledPanelFooterContentMiddleProps {
  size: PanelFooterSize;
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

export const StyledPanelFooterContentBottom = styled.div``;
