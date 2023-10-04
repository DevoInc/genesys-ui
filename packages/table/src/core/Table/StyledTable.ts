import * as React from 'react';
import styled, { css } from 'styled-components';

export interface StyledTableProps {
  width?: React.CSSProperties['width'];
  minWidth?: React.CSSProperties['minWidth'];
}

export const StyledTable = styled.table<StyledTableProps>`
  height: auto;

  margin: 0;

  ${({ width }) => css`
    width: ${width};
  `}

  ${({ minWidth }) => css`
    min-width: ${minWidth};
  `}

  border: none;
  position: relative;
`;
