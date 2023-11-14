import styled, { DefaultTheme } from 'styled-components';

interface StyledTableCellWrapperProps {
  cellWidth?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  theme: DefaultTheme;
}

export const StyledTableCellWrapper = styled.td.attrs(
  ({ cellWidth, theme }: StyledTableCellWrapperProps) => ({
    style: {
      width: cellWidth,
      color: theme.alias.color.text.body.base,
    },
  }),
)<StyledTableCellWrapperProps>`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
`;
