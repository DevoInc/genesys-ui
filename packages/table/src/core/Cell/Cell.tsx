import * as React from 'react';
import { GIPencilEditFilled } from '@devoinc/genesys-icons';

import type { TColDef, TRow } from '../../declarations';
import { useRenderContent } from './useRenderContent';
import { useInitialState } from '../../editors/useInitialState';
import { TableContext, WrapperContext } from '../../context';

import { StyledCellWrapper } from './StyledCellWrapper';
import { StyledCell } from './StyledCell';
import { StyledCellMarker } from './StyledCellMarker';

interface CellProps {
  data: unknown;
  colDef: TColDef;
  width?: number;
  height?: number;
  offsetX?: number;
  rowIndex: number;
  row: TRow;
  colSpan?: number;
}

export const Cell: React.FC<CellProps> = ({
  data,
  colDef,
  rowIndex,
  width,
  height,
  offsetX,
  row,
  colSpan,
}) => {
  const { density, texts, highlightColumnsOnHover } =
    React.useContext(TableContext);
  const { height: wrapperHeight } = React.useContext(WrapperContext);
  const { onReset } = colDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(colDef, data, rowIndex, row);

  return (
    <StyledCell
      $density={density}
      $height={height}
      $width={width}
      $offsetX={offsetX}
      colSpan={colSpan}
      highlightColumnsOnHover={highlightColumnsOnHover}
      $wrapperHeight={wrapperHeight}
      aria-selected={isEditMode}
      onDoubleClick={onDoubleClick}
      ref={cellRef}
    >
      <StyledCellWrapper
        as={colDef.editable ? 'button' : 'div'}
        $clickable={colDef.editable}
        $isEditMode={isEditMode}
        $density={density}
        tabIndex={colDef.editable ? 0 : -1}
        title={
          isEditMode ? texts?.cell?.editSaveTooltip : texts?.cell?.editTooltip
        }
        toEdge={colDef?.toEdge}
        verAlign={colDef?.verticalAlign}
        $horAlign={
          colDef?.align || (colDef.preset === 'number' ? 'right' : null)
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
