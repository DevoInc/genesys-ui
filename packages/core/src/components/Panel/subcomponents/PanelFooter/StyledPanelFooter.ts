import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../helpers';

export interface StyledPanelFooterProps {
  bordered?: boolean;
  hasBackground?: boolean;
  hasBoxShadow?: boolean;
}

export const StyledPanelFooter = styled.footer<StyledPanelFooterProps>`
  ${({ bordered, hasBoxShadow, hasBackground, theme }) => {
    const panelTokensFooter = getPanelTokens(theme).footer;
    const footerModalTokens = theme.cmp.modal.footer;

    return css`
      z-index: 1;
      flex-shrink: 0;
      box-shadow: ${hasBoxShadow && panelTokensFooter.elevation.boxShadow};
      border-top: ${bordered && `1px solid ${panelTokensFooter.color.border}`};
      background-color: ${hasBackground && footerModalTokens.color.background};
    `;
  }};
`;
