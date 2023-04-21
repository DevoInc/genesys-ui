import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../../helpers';

export interface StyledPanelHeaderContainerProps {
  /** Apply bordered styles */
  bordered?: boolean;
  /** Apply shadow styles */
  hasBoxShadow?: boolean;
}

export const StyledPanelHeaderContainer = styled.header<StyledPanelHeaderContainerProps>`
  ${({ hasBoxShadow, bordered, theme }) => {
    const panelHeaderTokens = getPanelTokens(theme).header;

    return css`
      flex-shrink: 0;
      z-index: 1;
      box-shadow: ${hasBoxShadow && panelHeaderTokens.elevation.boxShadow};
      border-bottom: ${bordered &&
      `1px solid ${panelHeaderTokens.color.border}`};
    `;
  }};
`;
