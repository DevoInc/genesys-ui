import { VirtualItem } from '@tanstack/react-virtual';
import React from 'react';
import { TextRenderer } from '../../renderers';
import { StyledHeaderCell } from './StyledTableHeaderCellWrapper';

interface HeaderCellProps {
  scrolled?: boolean;
  virtualColumn: VirtualItem;
  headerName: string;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  scrolled,
  virtualColumn,
  headerName,
}) => (
  <StyledHeaderCell scrolled={scrolled} cellWidth={`${virtualColumn.size}px`}>
    <TextRenderer value={headerName} bold />
  </StyledHeaderCell>
);
