import styled from 'styled-components';

interface StyledTableRowProps {
  styles?: React.CSSProperties;
}

export const StyledTableRow = styled.tr<StyledTableRowProps>`
  position: ${({ styles }) => styles.position};
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ styles }) => styles.height};
  transform: ${({ styles }) => styles.transform};
  display: table;
`;
