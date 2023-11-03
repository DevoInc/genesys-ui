import styled, { css } from 'styled-components';

interface StyledTableBodyProps {
  height?: React.CSSProperties['height'];
}

export const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  position: absolute;
  overflow: auto;
  height: 200px;
`;
