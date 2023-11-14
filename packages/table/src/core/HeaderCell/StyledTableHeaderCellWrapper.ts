import * as React from 'react';
import styled, { css } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../utils';

interface StyledHeaderCellProps {
  scrolled?: boolean;
  cellWidth?: React.CSSProperties['width'];
}

export const StyledHeaderCell = styled.th<StyledHeaderCellProps>`
  ${({ scrolled, theme }) => {
    return css`
      ${scrolled && elevationMixin(theme)('stickyBottom')};
      position: ${scrolled ? 'sticky' : 'relative'};
    `;
  }}

  top: 0;
  vertical-align: middle;
  box-sizing: border-box;

  ${({ cellWidth }) => {
    return css`
      width: ${cellWidth};
    `;
  }}

  ${({ theme }) => {
    const aliasTokens = theme.alias;
    return css`
      color: ${aliasTokens.color.text.heading.base};
    `;
  }}

  ${({ scrolled, theme }) => {
    const tokens = theme.cmp.table;
    const borderRadius = getSizes(tokens).row.br + 'px';
    return css`
      // border radius in head top
      &:first-child {
        border-radius: ${scrolled
          ? `${borderRadius} 0 0 0`
          : `${borderRadius} 0 0 ${borderRadius}`};
      }
      &:last-child {
        border-radius: ${!scrolled && `0 ${borderRadius} ${borderRadius} 0`};
      }
    `;
  }}

  // resizable columns
      ::-webkit-resizer {
    appearance: none;
  }
  padding-top: 0;
  padding-bottom: 0;
  // to avoid include '...' ellipsis in complex type cells
  &::after {
    content: none;
  }
`;
