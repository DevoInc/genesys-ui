import styled, { css } from 'styled-components';

import { PanelFooterSize } from '../declarations';
import { FooterSettingsProps } from '../../../declarations';

export interface StyledPanelFooterContainerProps extends FooterSettingsProps {
  size?: PanelFooterSize;
}

export const StyledPanelFooterContainer = styled.footer<StyledPanelFooterContainerProps>`
  ${({ bordered, hasBoxShadow, hasBackground, removeSpace, size, theme }) => {
  const panelFooterTokens = theme.cmp.panel.footer;
  const footerModalTokens = theme.cmp.modal.footer;

  return css`
      z-index: 1;
      flex-shrink: 0;
      box-shadow: ${hasBoxShadow && panelFooterTokens.elevation.boxShadow};
      border-top: ${bordered && `1px solid ${panelFooterTokens.color.border}`};
      background-color: ${hasBackground && footerModalTokens.color.background};
      display: flex;
      align-items: center;
      padding: ${removeSpace ? '0' : panelFooterTokens.space.padding[size]};

      &:empty {
        display: none;
      }
    `;
}};
`;
