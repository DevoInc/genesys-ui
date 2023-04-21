import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../../../helpers';
import { PanelHeaderSize } from '../../declarations';

export interface StyledPanelHeaderContentPrependProps {
  size: PanelHeaderSize;
}

export const StyledPanelHeaderContentPrepend = styled.div<StyledPanelHeaderContentPrependProps>`
  ${({ size, theme }) => {
    const tokensPanelHeaderPrepend = getPanelTokens(theme).headerPrepend;

    return css`
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-right: ${tokensPanelHeaderPrepend.space.marginRight[size]};
    `;
  }};
`;
