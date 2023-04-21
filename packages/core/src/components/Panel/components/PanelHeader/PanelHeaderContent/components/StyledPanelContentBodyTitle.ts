import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../../../helpers';
import { PanelSize } from '../../../../declarations';

export interface StyledPanelHeaderContentLegendProps {
  size: PanelSize;
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
