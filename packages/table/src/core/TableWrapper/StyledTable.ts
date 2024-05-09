import styled from 'styled-components';

export interface StyledTableProps {
  $width: number;
  $height: number;
}

export const StyledTable = styled.table<StyledTableProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${({ $height }) => ($height ? `${$height}px` : 'auto')};
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
`;
