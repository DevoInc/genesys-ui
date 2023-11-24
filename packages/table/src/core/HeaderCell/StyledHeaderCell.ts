import * as React from 'react';
import styled, { css } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../utils';

interface StyledHeaderCellProps {
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
  flex: ${({ headerCellFlex, headerCellWidth }) =>
    headerCellWidth ? '0 0 auto' : headerCellFlex};
  color: ${({ theme }) => theme.alias.color.text.heading.base};

  // resizable columns
  ::-webkit-resizer {
    appearance: none;
  }

  // to avoid include '...' ellipsis in complex type cells
  &::after {
    content: none;
  }
`;
