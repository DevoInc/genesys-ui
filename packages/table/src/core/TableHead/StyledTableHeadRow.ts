import * as React from 'react';
import styled, { css } from 'styled-components';

interface StyledTableHeadRowProps {
  scrolled?: boolean;
  height?: React.CSSProperties['height'];
}

export const StyledTableHeadRow = styled.tr<StyledTableHeadRowProps>`
  position: relative;
  width: 100%;

  ${({ height }) => {
    return css`
      height: ${height};
    `;
  }}

  ${({ scrolled, theme }) => {
    const tokens = theme.cmp.table;
    const cmpTokens = tokens.headRow;
    return css`
      border-bottom: ${!scrolled &&
      `solid ${cmpTokens.shape.borderSize.md} ${cmpTokens.color.background.after.base}`};
    `;
  }}
`;
