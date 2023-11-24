import * as React from 'react';
import styled, { css } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../utils';

interface StyledHeaderCellProps {
  scrolled?: boolean;
  headerCellWidth: React.CSSProperties['width'];
  offsetX?: number;
}

export const StyledHeaderCell = styled.th<StyledHeaderCellProps>`
  display: block;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 1.2rem;
  width: ${({ headerCellWidth }) => headerCellWidth};
  color: ${({ theme }) => theme.alias.color.text.heading.base};
  transform: ${({ offsetX }) => `translateX(${offsetX}px)`};

  ${({ scrolled, theme }) => {
    return css`
      ${scrolled && elevationMixin(theme)('stickyBottom')};
      position: ${scrolled ? 'sticky' : 'absolute'};
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

  // to avoid include '...' ellipsis in complex type cells
  &::after {
    content: none;
  }
`;
