import styled, { css } from 'styled-components';

import { ActiveStatus } from '../../';

export interface StyledBoxMessageProps {
  /** BoxMessage status */
  status?: ActiveStatus;
}

export const StyledBoxMessage = styled.div<StyledBoxMessageProps>`
  ${({ status = 'info', theme }) => {
    const cmpTokens = theme.cmp.boxMessage;

    // return css`
    //   position: relative;
    //   display: flex;
    //   gap: ${cmpTokens.space.padding};
    //   border: ${cmpTokens.shape.borderSize} solid
    //     ${cmpTokens.color.border[status]};
    //   border-radius: ${cmpTokens.shape.borderRadius};
    //   padding: ${cmpTokens.space.padding};
    //   background-color: ${cmpTokens.color.background[status]};
    // `;
    return css`
      position: relative;
      display: flex;
      background-color: ${cmpTokens.color.background[status]};
    `;
  }}
`;
