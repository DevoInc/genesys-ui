import * as React from 'react';
import styled, { css } from 'styled-components';

import { StyledTableCellMarker } from './StyledTableCellMarker';

export const StyledTableCellMarkerExpand = styled((props) => (
  <StyledTableCellMarker {...props} />
))`
  ${({ theme }) => {
    return css`
      position: absolute;
      right: 0.6rem;
      top: 0.6rem;
      font-size: ${theme.cmp.table.cellExpandMarker.typo.fontSize};
      font-weight: bold;
    `;
  }}
`;
