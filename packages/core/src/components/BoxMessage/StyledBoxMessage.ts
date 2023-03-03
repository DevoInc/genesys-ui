import styled, { css } from 'styled-components';

import { ActiveStatus } from '../../';

export interface StyledBoxMessageProps {
  /** BoxMessage status */
  status?: ActiveStatus;
}

export const StyledBoxMessage = styled.div<StyledBoxMessageProps>`
  ${({ status = 'info', theme }) => {
    const aliasTokens = theme.tokens.alias;
    const cmpTokens = theme.tokens.cmp.boxMessage;
    const spacingTokens = aliasTokens.space;

    return css`
      position: relative;
      display: flex;
      border: 0.1rem solid ${cmpTokens.color.border[status]};
      border-radius: 0.4rem;
      padding: ${spacingTokens.cmp.sm};
      background-color: ${cmpTokens.color.background[status]};
    `;
  }}
`;
