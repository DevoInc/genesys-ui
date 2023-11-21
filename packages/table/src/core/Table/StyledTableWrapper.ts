import * as React from 'react';
import styled from 'styled-components';
import { scrollbars } from '@devoinc/genesys-ui';

export interface StyledTableWrapperProps {
  maxHeight?: React.CSSProperties['maxHeight'];
  scrolled?: boolean;
  height?: React.CSSProperties['height'];
}

export const StyledTableWrapper = styled.div<StyledTableWrapperProps>`
  ${({ theme }) => scrollbars({ theme })};
  display: inline-block;
  width: 100%;
  overflow-y: ${({ scrolled }) => (scrolled ? 'auto' : 'visible')};
  overflow-x: auto;
  max-height: ${({ height }) => height};
`;
