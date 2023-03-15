import styled, { css } from 'styled-components';
import { SelectSize } from '../declarations';

export interface StyledSelectAllProps {
  size: SelectSize;
}

export const StyledSelectAll = styled.div<StyledSelectAllProps>`
  ${({ size, theme }) => {
    const tokens = theme.tokens.cmp.select.selectAll;
    return css`
      border-bottom: ${tokens.shape.border};
      padding: ${tokens.space.margin[size]};
    `;
  }}
`;
