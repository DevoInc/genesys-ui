import styled, { css, DefaultTheme } from 'styled-components';

export interface StyledSelectAllProps {
  size: any; // TODO: chack type;
  theme: DefaultTheme;
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
