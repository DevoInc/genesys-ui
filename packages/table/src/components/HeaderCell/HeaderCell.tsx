import React from 'react';
import {
  StyledTableHeaderCellWrapper,
  StyledTableHeadCellSeparator,
  StyledTableHeadCellGrabber,
} from './styled';
import { RenderCellContentText } from '../common';
import { ColDef } from '../declarations';

interface HeaderCellProps {
  column: ColDef;
  data: string;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({ column, data }) => (
  <StyledTableHeaderCellWrapper widthProp={column.cellStyle.width}>
    <RenderCellContentText value={data} bold />
    {column.isResizable && <StyledTableHeadCellGrabber />}
    {column.isResizable && <StyledTableHeadCellSeparator heightProp={null} />}
  </StyledTableHeaderCellWrapper>
);
