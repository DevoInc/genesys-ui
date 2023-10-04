import styled, { css } from 'styled-components';

interface StyledTableCellWrapperProps {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

export const StyledTableCellWrapper = styled.td<StyledTableCellWrapperProps>`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;

  ${({ width }) => css`
    width: ${width};
  `}

  ${({ theme }) => css`
    color: ${theme.alias.color.text.body.base};
  `}
`;
