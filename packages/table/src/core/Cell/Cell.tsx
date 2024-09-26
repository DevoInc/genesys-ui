import * as React from 'react';

import { GIPencilEditFilled } from '@devoinc/genesys-icons';
import { mergeStyles } from '@devoinc/genesys-ui';

import type { TCellDef, TColDef, TRow } from '../../declarations';
import { useRenderContent } from './useRenderContent';
import { useInitialState } from '../../editors/useInitialState';
import { TableContext } from '../../context';
import { StyledCellWrapper } from './StyledCellWrapper';
import { StyledCell } from './StyledCell';
import { StyledCellMarker } from './StyledCellMarker';

interface CellProps {
  data: unknown;
  colDef: TColDef;
  cellDef: TCellDef;
  width?: number;
  height?: number;
  offsetX?: number;
  rowIndex: number;
  row: TRow;
  colSpan?: number;
  wrapperHeight?: number;
}

export const Cell: React.FC<CellProps> = ({
  data,
  colDef,
  cellDef,
  rowIndex,
  width,
  height,
  offsetX,
  row,
  colSpan,
  wrapperHeight,
}) => {
  const { density, texts, highlightColumnsOnHover } =
    React.useContext(TableContext);
  const onReset = colDef.onReset;
  const colStyle = colDef?.style ?? '';
  const cellStyle = cellDef?.style ?? '';

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(colDef, data, rowIndex, row);

  return (
    <StyledCell
      $density={density}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${offsetX}px`,
      }}
      colSpan={colSpan}
      $highlightColumnsOnHover={highlightColumnsOnHover}
      $wrapperHeight={wrapperHeight}
      aria-selected={isEditMode}
      onDoubleClick={onDoubleClick}
      ref={cellRef}
      css={mergeStyles(colStyle, cellStyle)}
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
