import * as React from 'react';
import styled, { css } from 'styled-components';

interface StyledTableHeadRowProps {
  scrolled?: boolean;
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

export const StyledTableHeadRow = styled.tr<StyledTableHeadRowProps>`
  position: relative;
  width: 100%;
  display: block;

  ${({ scrolled, theme }) => {
    const tokens = theme.cmp.table;
    const cmpTokens = tokens.headRow;
    return css`
      border-bottom: ${!scrolled &&
      `solid ${cmpTokens.shape.borderSize.md} ${cmpTokens.color.background.after.base}`};
    `;
  }}

  ${({ width }) => css`
    width: ${width};
  `}

  ${({ height }) => css`
    height: ${height};
  `}
`;
