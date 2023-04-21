import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../../helpers';

export interface StyledPanelFooterContainerProps {
  /** Apply border at the top of the footer */
  bordered?: boolean;
  /** Apply the background color to the footer */
  hasBackground?: boolean;
  /** Apply box-shadow to the footer */
  hasBoxShadow?: boolean;
}

export const StyledPanelContainerFooter = styled.footer<StyledPanelFooterContainerProps>`
  ${({
    bordered = false,
    hasBoxShadow = false,
    hasBackground = false,
    theme,
  }) => {
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
