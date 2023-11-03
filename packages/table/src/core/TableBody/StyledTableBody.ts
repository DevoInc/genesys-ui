import styled from 'styled-components';

interface StyledTableBodyProps {
  height?: React.CSSProperties['height'];
}

export const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  position: relative;
  height: ${({ height }) => height};
  width: 100%;
`;
