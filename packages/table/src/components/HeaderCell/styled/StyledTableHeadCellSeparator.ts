import styled, { css, DefaultTheme } from 'styled-components';
import { pseudoElementMixin } from '@devoinc/genesys-ui';

export interface StyledTableHeadCellSeparatorProps {
  theme: DefaultTheme;
  heightProp?: number;
}

export const StyledTableHeadCellSeparator = styled.span<StyledTableHeadCellSeparatorProps>`
  ${({ heightProp, theme }) => {
    const tokens = theme.cmp.table.headCellSeparator;
    const separatorHeight = heightProp ? heightProp * 0.6 + 'px' : 'auto';
    return css`
      position: absolute;
      right: 0;
      top: 0;
      background-color: transparent;
      transform-origin: center;
      display: flex;
      align-items: stretch;
      justify-content: flex-end;
      width: 0.9rem;
      height: 100%;
      &::after {
        ${pseudoElementMixin(null)};
        right: 0;
        top: 50%;
        height: ${separatorHeight};
        margin-top: ${`calc((${separatorHeight} / 2) * -1)`};
        width: 1px;
        background-color: ${tokens.color.background.after};
      }
    `;
  }}
`;
