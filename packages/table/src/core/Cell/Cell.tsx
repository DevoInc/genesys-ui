import * as React from 'react';

import { GIPencilEditFilled } from '@devoinc/genesys-icons';
import { mergeStyles } from '@devoinc/genesys-ui';

import type { TCellDef, TColDef, TRow, TRowDef } from '../../declarations';

import { TableContext } from '../../context';
import { useInitialState } from '../../editors/useInitialState';
import { useRenderContent } from './useRenderContent';

import { StyledCell } from './StyledCell';
import { StyledCellMarker } from './StyledCellMarker';
import { StyledCellWrapper } from './StyledCellWrapper';

interface CellProps {
  cellDef: TCellDef;
  colDef: TColDef;
  colSpan?: number;
  data: unknown;
  height?: number;
  offsetX?: number;
  row: TRow;
  rowDef: TRowDef;
  rowIndex: number;
  width?: number;
}

export const Cell: React.FC<CellProps> = ({
  cellDef,
  colDef,
  colSpan,
  data,
  height,
  offsetX,
  row,
  rowIndex,
  rowDef,
  width,
}) => {
  const {
    density,
    texts,
    onCellMouseEnter,
    onCellMouseLeave,
    onDoubleClick,
    onKeyUp,
    onKeyDown,
  } = React.useContext(TableContext);

  useInitialState(data, colDef.onReset);

  const { cellRef, editionContent, isEditMode, viewContent } =
    useRenderContent(colDef, data, rowIndex, row);

  return (
    <StyledCell
      aria-selected={isEditMode}
      colSpan={colSpan}
      css={mergeStyles(colDef?.style ?? '', cellDef?.style ?? '')}
      ref={cellRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${offsetX}px`,
      }}
      $isHighlighted={colDef?.isHighlighted}
      onMouseEnter={() => {
        if (onCellMouseEnter) {
          onCellMouseEnter({ colDef, cellDef, rowDef });
        }
      }}
      onMouseLeave={() => {
        if (onCellMouseLeave) {
          onCellMouseLeave({ colDef, cellDef, rowDef });
        }
      }}
      onDoubleClick={() => {
        if (onDoubleClick) {
          onDoubleClick({ colDef, cellDef, rowDef, rowIndex });
        }
      }}
      onKeyUp={(event) => {
        if (onKeyUp) {
          onKeyUp({ event, colDef, cellDef, rowDef });
        }
      }}
      onKeyDown={(event) => {
        if (onKeyDown) {
          onKeyDown({ event, colDef, cellDef, rowDef });
        }
      }}
    >
      <StyledCellWrapper
        $clickable={colDef.editable}
        $density={density}
        $horAlign={
          colDef?.align || (colDef.preset === 'number' ? 'right' : null)
        }
        $isEditMode={isEditMode}
        as={colDef.editable ? 'button' : 'div'}
        tabIndex={colDef.editable ? 0 : -1}
        title={
          isEditMode ? texts?.cell?.editSaveTooltip : texts?.cell?.editTooltip
        }
        toEdge={colDef?.toEdge}
        verAlign={colDef?.verticalAlign}
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
