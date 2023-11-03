import React from 'react';

import { ColDef } from '../../declarations';
import { TextRenderer } from '../../renderers';
import { StyledHeaderCell } from './StyledTableHeaderCellWrapper';

interface HeaderCellProps {
  columnDef: ColDef;
  scrolled?: boolean;
  minWidth?: number;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  columnDef,
  scrolled,
  minWidth,
}) => (
  <StyledHeaderCell
    scrolled={scrolled}
    width={Math.min(columnDef?.cellStyle?.width, minWidth)}
  >
    <TextRenderer value={columnDef.headerName} bold />
  </StyledHeaderCell>
);
