import styled, { css } from 'styled-components';

interface StyledTableBodyProps {
  height?: React.CSSProperties['height'];
}

export const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  display: 'inline-block';
  position: relative;

  width: 100%;

  ${({ height }) => {
    return css`
      height: ${height};
    `;
  }}

  ${({ theme }) => {
    return css`
      background-color: ${theme.cmp.table.body.color.background};
    `;
  }}
`;
