import { VirtualItem } from '@tanstack/react-virtual';
import React from 'react';
import { ColDef } from '../../declarations';
import { StyledHeaderCell } from './StyledHeaderCell';
import { Typography } from '@devoinc/genesys-ui';

interface HeaderCellProps {
  colDef: ColDef;
  headerCellFlex: React.CSSProperties['flex'];
  headerCellWidth: React.CSSProperties['width'];
  virtualColumn: VirtualItem;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  colDef,
  headerCellFlex,
  headerCellWidth,
  //virtualColumn,
}) => (
  <StyledHeaderCell
    headerCellWidth={headerCellWidth}
    headerCellFlex={headerCellFlex}
  >
    <Typography.Heading size="h6" truncateLine={1}>
      {colDef.headerName}
    </Typography.Heading>
  </StyledHeaderCell>
);
