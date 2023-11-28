import React from 'react';
import { ColDef } from '../../declarations';
import { StyledHeaderCell } from './StyledHeaderCell';
import { Typography } from '@devoinc/genesys-ui';

interface HeaderCellProps {
  colDef: ColDef;
  headerCellWidth: React.CSSProperties['width'];
  offsetX: number;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  colDef,
  headerCellWidth,
  offsetX,
}) => (
  <StyledHeaderCell
    headerCellWidth={headerCellWidth}
    offsetX={offsetX}
    title={colDef.headerName}
  >
    <Typography.Heading size="h6" truncateLine={1}>
      {colDef.headerName}
    </Typography.Heading>
  </StyledHeaderCell>
);
