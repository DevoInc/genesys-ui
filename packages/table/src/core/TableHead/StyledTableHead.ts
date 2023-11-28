import styled, { css } from 'styled-components';
import React from 'react';
import { elevationMixin } from '@devoinc/genesys-ui';

interface StyledTableHeadProps {
  scrolled?: boolean;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

export const StyledTableHead = styled.thead<StyledTableHeadProps>`
  top: 0;
  display: inline-block;
  position: sticky;
  height: ${({ height }) => height};
  width: ${({ width }) => width || '100%'};

  ${({ scrolled, theme }) => {
    const tableHeadTokens = theme.cmp.table.head;
    const tableHeadRowTokens = theme.cmp.table.headRow;
    return css`
      ${scrolled
        ? elevationMixin(theme)('stickyBottom')
        : css`
            box-shadow: 0 0 0 ${tableHeadRowTokens.shape.borderSize.md}
              ${tableHeadRowTokens.color.background.after.base};
          `};
      z-index: ${tableHeadTokens.elevation.zIndex};
      background-color: ${theme.cmp.table.head.color.background};
    `;
  }}
`;
