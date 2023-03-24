import styled, { css } from 'styled-components';

import { BoxMessageProps } from '../../';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledBoxMessageIconProps
  extends Pick<BoxMessageProps, 'status'> {}

export const StyledBoxMessageIcon = styled.i<StyledBoxMessageIconProps>`
  ${({ status = 'info', theme }) => {
    const cmpTokens = theme.cmp.boxMessage;
    const colorTokens = cmpTokens.icon.color.text;

    return css`
      displya: flex;
      align-items: center;
      justify-content: center;
      height: 1.6rem;
      font-size: 1.6rem;
      color: ${colorTokens[status]};
    `;
  }};
`;
