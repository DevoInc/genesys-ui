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
  const { measures, texts } = React.useContext(TableContext);
  const { onReset } = columnDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(columnDef, data);
  const clickable = columnDef.editable;
  return (
    <StyledTableCell
      aria-selected={isEditMode}
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
        isEditMode={isEditMode}
        tabIndex={clickable ? 0 : -1}
        title={
          isEditMode ? texts?.cell?.editSaveTooltip : texts?.cell?.editTooltip
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
