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
  colDef: ColDef;
  width?: number;
  height?: number;
  offsetX?: number;
}

export const Cell: React.FC<CellProps> = ({
  data,
  colDef,
  width,
  height,
  offsetX,
}) => {
  const { sizes, texts, visualOptions, measures } =
    React.useContext(TableContext);
  const { onReset } = colDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(colDef, data);

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
        as={colDef.editable ? 'button' : 'div'}
        clickable={colDef.editable}
        isEditMode={isEditMode}
        paddingHor={`${sizes.cell.horPad}px`}
        paddingVer={`${sizes.cell.verPad}px`}
        tabIndex={colDef.editable ? 0 : -1}
        title={
          isEditMode ? texts?.cell?.editSaveTooltip : texts?.cell?.editTooltip
        }
        toEdge={colDef?.cellStyle?.toEdge}
        verAlign={colDef?.cellStyle?.align?.vertical}
        horAlign={
          colDef?.cellStyle?.align?.horizontal ||
          (colDef.preset === 'number' ? 'right' : null)
        }
      >
        {isEditMode ? editionContent : viewContent}
        {colDef.editable && !isEditMode && (
          <StyledTableCellMarker>
            <GIPencilEditFilled size={10} />
          </StyledTableCellMarker>
        )}
      </StyledTableCellWrapper>
    </StyledTableCell>
  );
};
