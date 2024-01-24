import styled, { css } from 'styled-components';

import { ActiveStatus } from '../../';

export interface StyledBannerProps {
  /** Banner status */
  status?: ActiveStatus;
}

export const StyledBanner = styled.div<StyledBannerProps>`
  ${({ status = 'info', theme }) => {
    const cmpTokens = theme.cmp.boxMessage;
    return css`
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: ${cmpTokens.space.padding};
      border: ${cmpTokens.shape.borderSize} solid
        ${cmpTokens.color.border[status]};
      border-radius: ${cmpTokens.shape.borderRadius};
      padding: ${cmpTokens.space.padding};
      background-color: ${cmpTokens.color.background[status]};
    `;
  }}
`;
