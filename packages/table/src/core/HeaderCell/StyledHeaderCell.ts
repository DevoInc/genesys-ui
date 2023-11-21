import * as React from 'react';
import styled, { css } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../utils';

interface StyledHeaderCellProps {
  scrolled?: boolean;
  headerCellWidth: React.CSSProperties['width'];
  headerCellFlex: React.CSSProperties['flex'];
}

export const StyledHeaderCell = styled.th<StyledHeaderCellProps>`
  display: flex;
  align-items: center;
  top: 0;
  box-sizing: border-box;
  height: 4.2rem;
  padding: 0 1.2rem;
  width: ${({ headerCellWidth }) => headerCellWidth};
  flex: ${({ headerCellFlex }) => headerCellFlex};
  color: ${({ theme }) => theme.alias.color.text.heading.base};
  flex: 0 0 auto;

  ${({ scrolled, theme }) => {
    return css`
      ${scrolled && elevationMixin(theme)('stickyBottom')};
      position: ${scrolled ? 'sticky' : 'relative'};
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
