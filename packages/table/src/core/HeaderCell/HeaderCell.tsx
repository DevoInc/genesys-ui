import { VirtualItem } from '@tanstack/react-virtual';
import React from 'react';
import { ColDef } from '../../declarations';
import { TextRenderer } from '../../renderers';
import { StyledHeaderCell } from './StyledTableHeaderCellWrapper';

interface HeaderCellProps {
  scrolled?: boolean;
  virtualColumn: VirtualItem;
  colDef: ColDef;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  scrolled,
  virtualColumn,
  colDef,
}) => (
  <StyledHeaderCell scrolled={scrolled} cellWidth={`${virtualColumn.size}px`}>
    <TextRenderer value={colDef.headerName} bold />
  </StyledHeaderCell>
);
