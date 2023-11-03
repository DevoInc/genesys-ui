import { VirtualItem } from '@tanstack/react-virtual';
import React from 'react';
import { TextRenderer } from '../../renderers';
import { StyledHeaderCell } from './StyledTableHeaderCellWrapper';

interface HeaderCellProps {
  scrolled?: boolean;
  virtualColumn: VirtualItem;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  scrolled,
  virtualColumn,
}) => (
  <StyledHeaderCell
    scrolled={scrolled}
    width={`${virtualColumn.size}px`}
    offsetX={virtualColumn.start}
  >
    <TextRenderer value={virtualColumn.key} bold />
  </StyledHeaderCell>
);
