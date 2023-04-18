import styled, { css } from 'styled-components';
import { getPanelTokens } from '../../../../helpers';
import { PanelFooterSize } from '../../declarations';

export interface StyledPanelFooterContentPrependProps {
  size: PanelFooterSize;
}

export const StyledPanelFooterContentPrepend = styled.div<StyledPanelFooterContentPrependProps>`
  ${({ size, theme }) => {
    const panelFooterTokensPrepend = getPanelTokens(theme).footerPrepend;

    return css`
      flex-shrink: 0;
      margin-right: ${panelFooterTokensPrepend.space.marginRight[size]};
    `;
  }};
`;
