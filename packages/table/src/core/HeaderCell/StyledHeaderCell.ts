import * as React from 'react';
import styled from 'styled-components';

interface StyledHeaderCellProps {
  headerCellWidth: React.CSSProperties['width'];
  offsetX?: number;
}

export const StyledHeaderCell = styled.th<StyledHeaderCellProps>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 4.2rem;
  padding: 0 1.2rem;
  width: ${({ headerCellWidth }) => headerCellWidth};
  color: ${({ theme }) => theme.alias.color.text.heading.base};
  transform: ${({ offsetX }) => `translateX(${offsetX}px)`};

  // resizable columns
  ::-webkit-resizer {
    appearance: none;
  }

  // to avoid include '...' ellipsis in complex type cells
  &::after {
    content: none;
  }
`;
