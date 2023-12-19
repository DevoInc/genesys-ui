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
  width?: number;
  height?: number;
  offsetX?: number;
}

export const Cell: React.FC<CellProps> = ({
  data,
  columnDef,
  width,
  height,
  offsetX,
}) => {
  const { sizes, texts, visualOptions, measures } =
    React.useContext(TableContext);
  const { onReset } = columnDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(columnDef, data);

  return (
    <StyledTableCell
      $height={`${height}px`}
      $width={`${width}px`}
      highlightColumnsOnHover={visualOptions?.highlightColumnsOnHover}
      highlightedColumnHeight={measures?.body?.visible?.height}
      aria-selected={isEditMode}
      offsetX={offsetX}
      onDoubleClick={onDoubleClick}
      ref={cellRef}
    >
      <StyledTableCellWrapper
        as={columnDef.editable ? 'button' : 'div'}
        clickable={columnDef.editable}
        isEditMode={isEditMode}
        paddingHor={`${sizes.cell.horPad}px`}
        paddingVer={`${sizes.cell.verPad}px`}
        tabIndex={columnDef.editable ? 0 : -1}
        title={
          isEditMode ? texts?.cell?.editSaveTooltip : texts?.cell?.editTooltip
        }
        toEdge={columnDef?.cellStyle?.toEdge}
        verAlign={columnDef?.cellStyle?.align?.vertical}
        horAlign={
          columnDef?.cellStyle?.align?.horizontal ||
          (columnDef.preset === 'number' ? 'right' : null)
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
