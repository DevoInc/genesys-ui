import React from 'react';
import styled, { css } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';

import { getTableZIndexMap } from '../utils';

interface StyledTableHeadProps {
  $height?: React.CSSProperties['height'];
  $scrolled?: boolean;
  $width?: number;
}

export const StyledTableHead = styled.thead<StyledTableHeadProps>`
  top: 0;
  display: inline-block;
  position: sticky;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};

  ${({ $scrolled, theme }) => {
    const tableHeadRowTokens = theme.cmp.table.headRow;
    return css`
      ${$scrolled
        ? elevationMixin(theme)('stickyBottom')
        : css`
            box-shadow: 0 0 0 ${tableHeadRowTokens.shape.borderSize.md}
              ${tableHeadRowTokens.color.background.after.base};
          `};
    `;
  }}

  ${({ theme }) => css`
    z-index: ${getTableZIndexMap(theme).head};
    background-color: ${theme.cmp.table.head.color.background};
  `}}
`;
