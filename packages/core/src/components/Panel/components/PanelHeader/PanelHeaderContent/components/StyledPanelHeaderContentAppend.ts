import styled, { css } from 'styled-components';

import { PanelHeaderSize } from '../../declarations';
import { getPanelTokens } from '../../../../helpers';

export interface StyledPanelHeaderContentAppendProps {
  size: PanelHeaderSize;
}

export const StyledPanelHeaderContentAppend = styled.div<StyledPanelHeaderContentAppendProps>`
  ${({ size, theme }) => {
    const tokensPanelHeaderAction = getPanelTokens(theme).headerAction;
    const tokensPanelHeaderAppend = getPanelTokens(theme).headerAppend;

    return css`
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;

      > *:first-child {
        margin-left: ${tokensPanelHeaderAppend.space.marginLeft[size]};
      }
      > *:not(:first-child) {
        margin-left: ${tokensPanelHeaderAction.space.marginLeft[size]};
      }
    `;
  }};
`;
