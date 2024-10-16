import { css, DefaultTheme } from 'styled-components';

/**
 * Get the common styles for table cells
 *
 * @return object with styles
 */
export const cellMixin = ({ theme }: { theme: DefaultTheme }) => css`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex: 1 1 auto;
  color: ${theme.cmp.table.cell.color.text.base};
`;
