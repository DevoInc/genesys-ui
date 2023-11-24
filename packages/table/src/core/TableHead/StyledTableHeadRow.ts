import * as React from 'react';
import styled from 'styled-components';

interface StyledTableHeadRowProps {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

export const StyledTableHeadRow = styled.tr<StyledTableHeadRowProps>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
`;
