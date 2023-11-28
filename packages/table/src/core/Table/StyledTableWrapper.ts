import * as React from 'react';
import styled from 'styled-components';
import { scrollbars } from '@devoinc/genesys-ui';

export interface StyledTableWrapperProps {
  maxHeight?: React.CSSProperties['maxHeight'];
}

export const StyledTableWrapper = styled.div<StyledTableWrapperProps>`
  ${({ theme }) => scrollbars({ theme })};
  display: inline-block;
  width: 100%;
  overflow: auto;
  max-height: ${({ maxHeight }) => maxHeight};
`;
