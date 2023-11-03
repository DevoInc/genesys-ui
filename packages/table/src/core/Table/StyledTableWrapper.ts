import * as React from 'react';
import styled, { css } from 'styled-components';
import { scrollbars } from '@devoinc/genesys-ui';

export interface StyledTableWrapperProps {
  maxHeight?: React.CSSProperties['maxHeight'];
  scrolled?: boolean;
  height?: React.CSSProperties['height'];
}

export const StyledTableWrapper = styled.div<StyledTableWrapperProps>`
  width: 100%;
  height: ${({ height }) => height};
  overflow: auto;
`;
