import styled, { DefaultTheme } from 'styled-components';

interface StyledTableCellWrapperProps {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  translateX?: number;
  translateY?: number;
  theme: DefaultTheme;
}

export const StyledTableCellWrapper = styled.td.attrs(
  ({ width, theme, translateX, translateY }: StyledTableCellWrapperProps) => ({
    style: {
      width,
      color: theme.alias.color.text.body.base,
      transform: `translateX(${translateX}px) translateY(${translateY}px)`,
    },
  }),
)<StyledTableCellWrapperProps>`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
`;
