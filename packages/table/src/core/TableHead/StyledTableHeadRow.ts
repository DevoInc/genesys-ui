import * as React from 'react';
import styled from 'styled-components';

interface StyledTableHeadRowProps {
  $height?: React.CSSProperties['height'];
}

export const StyledTableHeadRow = styled.tr<StyledTableHeadRowProps>`
  position: relative;
  display: flex;
  height: ${({ $height }) => $height};
`;
