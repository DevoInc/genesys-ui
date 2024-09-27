import styled from 'styled-components';

export interface StyledTableProps {
  $width: number;
  $height: number;
}

export const StyledTable = styled.table<StyledTableProps>`
  display: flex;
  flex-direction: column;
  ${({ $height }) => $height && `height: ${$height}px`};
  position: relative;
  ${({ $width }) => $width && `width: ${$width}px`};
`;
