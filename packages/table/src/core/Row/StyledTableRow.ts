import React from 'react';
import styled from 'styled-components';

interface StyledTableRowProps {
  even: boolean;
  position?: React.CSSProperties['position'];
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  transform?: React.CSSProperties['transform'];
}

export const StyledTableRow = styled.tr.attrs<StyledTableRowProps>(
  ({ position, width, height, transform }) => ({
    style: {
      position: position ?? 'absolute',
      width: width ? `${width}px` : '100%',
      height,
      transform,
    },
  }),
)<StyledTableRowProps>`
  top: 0;
  left: 0;
`;
