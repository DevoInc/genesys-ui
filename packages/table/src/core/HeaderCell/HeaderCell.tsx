import { VirtualItem } from '@tanstack/react-virtual';
import React from 'react';
import { ColDef } from '../../declarations';
import { TextRenderer } from '../../renderers';
import { StyledHeaderCell } from './StyledHeaderCell';
import { Typography } from '@devoinc/genesys-ui';

interface HeaderCellProps {
  scrolled?: boolean;
  colDef: ColDef;
  headerCellFlex: React.CSSProperties['flex'];
  headerCellWidth: React.CSSProperties['width'];
  virtualColumn: VirtualItem;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  scrolled,
  colDef,
  headerCellFlex,
  headerCellWidth,
  virtualColumn,
}) => (
  <StyledHeaderCell
    scrolled={scrolled}
    headerCellWidth={headerCellWidth}
    headerCellFlex={headerCellFlex}
  >
    <Typography.Heading size="h6">{colDef.headerName}</Typography.Heading>
  </StyledHeaderCell>
);
