import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../../helpers';
import * as React from 'react';
import { PanelHeaderSize } from '../declarations';

export interface StyledPanelHeaderContainerProps {
  /** Apply bordered styles */
  bordered?: boolean;
  /** Apply shadow styles */
  hasBoxShadow?: boolean;
  hasSubtitle?: boolean;
  size?: PanelHeaderSize;
}

export const StyledPanelHeaderContainer = styled.header<StyledPanelHeaderContainerProps>`
  ${({ hasBoxShadow, bordered, size = 'md', hasSubtitle, theme }) => {
    const panelHeaderTokens = getPanelTokens(theme).header;

    return css`
      display: flex;
      flex-shrink: 0;
      align-items: ${hasSubtitle ? 'flex-start' : 'center'};
      z-index: 1;
      box-shadow: ${hasBoxShadow && panelHeaderTokens.elevation.boxShadow};
      border-bottom: ${bordered &&
      `1px solid ${panelHeaderTokens.color.border}`};
      padding: ${theme.cmp.panel.header.space.padding[size]};

      &:empty {
        display: none;
      }
    `;
  }};
`;
