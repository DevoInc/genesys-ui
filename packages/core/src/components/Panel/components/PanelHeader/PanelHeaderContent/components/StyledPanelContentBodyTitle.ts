import styled, { css } from 'styled-components';

import { BaseSize } from '../../../../../../declarations';
import { getPanelTokens } from '../../../../helpers';

export interface StyledPanelHeaderContentLegendProps {
  size: BaseSize;
}

export const StyledPanelHeaderContentLegend = styled.div<StyledPanelHeaderContentLegendProps>`
  ${({ size, theme }) => {
    const tokensPanelHeaderLegend = getPanelTokens(theme).headerLegend;

    return css`
      display: flex;
      align-items: center;
      margin-left: ${tokensPanelHeaderLegend.space.marginLeft[size]};
      height: ${tokensPanelHeaderLegend.size.height[size]};
    `;
  }}
`;
