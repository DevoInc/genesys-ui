import React from 'react';

import { ColDef } from '../../declarations';
import { TextRenderer } from '../../renderers';
import { StyledHeaderCell } from './StyledTableHeaderCellWrapper';

interface HeaderCellProps {
  columnDef: ColDef;
  scrolled?: boolean;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  columnDef,
  scrolled,
}) => (
  <StyledHeaderCell scrolled={scrolled} width={columnDef?.cellStyle?.width}>
    <TextRenderer value={columnDef.headerName} bold />
  </StyledHeaderCell>
);
