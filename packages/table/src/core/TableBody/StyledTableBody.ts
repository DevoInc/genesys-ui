import styled from 'styled-components';

interface StyledTableBodyProps {
  $height?: React.CSSProperties['height'];
  $width?: React.CSSProperties['width'];
}

export const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  position: relative;
  display: inline-block;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
`;
