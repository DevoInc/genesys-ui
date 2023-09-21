import React from 'react';
import { CellData, ColDef } from '../Cell/declarations';
import { useRenderContent } from '../Cell/useRenderContent';
import {
  StyledTableHeadCell,
  StyledTableHeadCellSeparator,
  StyledTableHeadCellGrabber,
  StyledTableHeadCellText,
  StyledTableHeadCellWrapper,
} from './styled';

interface HeaderCellProps {
  column: ColDef;
  data: CellData;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({ column, data }) => {
  const { viewContent } = useRenderContent(null, column, data, null);

  return (
    <StyledTableHeadCell widthProp={column.cellStyle.width}>
      <StyledTableHeadCellWrapper>
        <StyledTableHeadCellText
          title={column.headerName}
          isSortable={!!column.sort?.direction}
        >
          {viewContent}
        </StyledTableHeadCellText>
      </StyledTableHeadCellWrapper>
      {column.isResizable && <StyledTableHeadCellGrabber />}
      {column.isResizable && <StyledTableHeadCellSeparator heightProp={null} />}
    </StyledTableHeadCell>
  );
};
