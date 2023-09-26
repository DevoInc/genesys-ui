import React from 'react';
import { StyledTableHeaderCellWrapper } from './styled';
import { RenderCellContentText } from '../common';
import { ColDef } from '../declarations';

interface HeaderCellProps {
  column: ColDef;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  column: { cellStyle, headerName },
}) => (
  <StyledTableHeaderCellWrapper width={cellStyle.width}>
    <RenderCellContentText value={headerName} bold />
  </StyledTableHeaderCellWrapper>
);
