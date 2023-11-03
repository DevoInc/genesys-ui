import * as React from 'react';
import styled from 'styled-components';

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
