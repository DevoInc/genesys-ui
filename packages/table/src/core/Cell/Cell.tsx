import * as React from 'react';
import { StyledTableCell } from './StyledTableCell';
import { useRenderContent } from './useRenderContent';
import { ColDef } from '../../declarations';
import { useInitialState } from '../../editors/useInitialState';
import { TableContext } from '../Table/context';
import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { GIPencilEditFilled } from '@devoinc/genesys-icons';
import { StyledTableCellMarker } from './StyledTableCellMarker';

interface CellProps {
  data: unknown;
  columnDef: ColDef;
  cellWidth?: React.CSSProperties['width'];
  cellHeight?: React.CSSProperties['height'];
  offsetX?: number;
}

export const Cell: React.FC<CellProps> = ({
  data,
  columnDef,
  cellWidth,
  cellHeight,
  offsetX,
}) => {
  const { measures } = React.useContext(TableContext);
  const { onReset } = columnDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(columnDef, data);
  const clickable = columnDef.editable && !isEditMode;
  return (
    <StyledTableCell
      onDoubleClick={onDoubleClick}
      ref={cellRef}
      cellWidth={cellWidth}
      offsetX={offsetX}
      height={cellHeight}
    >
      <StyledTableCellWrapper
        clickable={clickable}
        as={clickable ? 'button' : 'div'}
        paddingVer={`${measures.cell.verPad}px`}
        paddingHor={`${measures.cell.horPad}px`}
        title={
          clickable ? 'Double click to edit' : 'Click outside to save changes'
        }
      >
        {isEditMode ? editionContent : viewContent}
        {columnDef.editable && !isEditMode && (
          <StyledTableCellMarker>
            <GIPencilEditFilled size={10} />
          </StyledTableCellMarker>
        )}
      </StyledTableCellWrapper>
    </StyledTableCell>
  );
};
