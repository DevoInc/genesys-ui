import * as React from 'react';
import { StyledCell } from './StyledCell';
import { useRenderContent } from './useRenderContent';
import { ColDef, Size } from '../../declarations';
import { useInitialState } from '../../editors/useInitialState';
import { TableContext } from '../../context/TableContext';
import { StyledCellWrapper } from './StyledCellWrapper';
import { GIPencilEditFilled } from '@devoinc/genesys-icons';
import { StyledCellMarker } from './StyledCellMarker';

interface CellProps {
  data: unknown;
  colDef: ColDef;
  width?: number;
  height?: number;
  offsetX?: number;
  wrapperSize: Size;
}

export const Cell: React.FC<CellProps> = ({
  data,
  colDef,
  width,
  height,
  offsetX,
  wrapperSize,
}) => {
  const { density, texts, highlightColumnsOnHover } =
    React.useContext(TableContext);
  const { onReset } = colDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(colDef, data);

  return (
    <StyledCell
      $height={height}
      $width={width}
      offsetX={offsetX}
      highlightColumnsOnHover={highlightColumnsOnHover}
      wrapperHeight={wrapperSize?.height ?? 0}
      aria-selected={isEditMode}
      onDoubleClick={onDoubleClick}
      ref={cellRef}
    >
      <StyledCellWrapper
        as={colDef.editable ? 'button' : 'div'}
        clickable={colDef.editable}
        isEditMode={isEditMode}
        density={density}
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
          <StyledCellMarker>
            <GIPencilEditFilled size={10} />
          </StyledCellMarker>
        )}
      </StyledCellWrapper>
    </StyledCell>
  );
};
