import styled, { css } from 'styled-components';
import { CommonSelectCmpsProps } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledSelectAllProps extends CommonSelectCmpsProps {}

export const StyledSelectAll = styled.div<StyledSelectAllProps>`
  ${({ size, theme }) => {
    const tokens = theme.cmp.select.selectAll;
    return css`
      border-bottom: ${tokens.shape.border};
      padding: ${tokens.space.margin[size]};
    `;
  }}
`;
