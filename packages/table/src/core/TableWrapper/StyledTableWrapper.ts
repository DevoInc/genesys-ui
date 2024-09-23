import * as React from 'react';
import styled from 'styled-components';
import { scrollbars } from '@devoinc/genesys-ui';

export interface StyledTableWrapperProps {
  $maxHeight?: React.CSSProperties['maxHeight'];
}

export const StyledTableWrapper = styled.div<StyledTableWrapperProps>`
  display: inline-block;
  ${({ $maxHeight }) => $maxHeight && `max-height: ${$maxHeight}`};
  overflow: auto;
  ${({ theme }) => scrollbars({ theme })};
  width: 100%;
`;
