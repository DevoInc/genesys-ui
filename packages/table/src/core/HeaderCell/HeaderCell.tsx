import React from 'react';
import { ColDef } from '../../declarations';
import { StyledHeaderCell } from './StyledHeaderCell';
import { Typography } from '@devoinc/genesys-ui';

interface HeaderCellProps {
  scrolled?: boolean;
  colDef: ColDef;
  headerCellWidth: React.CSSProperties['width'];
  offsetX: number;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  scrolled,
  colDef,
  headerCellWidth,
  offsetX,
}) => (
  <StyledHeaderCell
    scrolled={scrolled}
    headerCellWidth={headerCellWidth}
    offsetX={offsetX}
  >
    <Typography.Heading size="h6">{colDef.headerName}</Typography.Heading>
  </StyledHeaderCell>
);
