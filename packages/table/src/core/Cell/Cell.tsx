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
  colIndex?: number;
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
  colIndex,
  data,
  height,
  offsetX,
  row,
  rowIndex,
  rowDef,
  width,
}) => {
  const { density, texts, onCellMouseEnter, onCellMouseLeave, textsCell } =
    React.useContext(TableContext);

  useInitialState(data, colDef.onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(colDef, data, rowIndex, row, rowDef);

  return (
    <StyledCell
      aria-selected={isEditMode}
      css={mergeStyles(colDef?.style ?? '', cellDef?.style ?? '')}
      onDoubleClick={onDoubleClick}
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
      aria-colindex={colIndex}
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
          textsCell
            ? textsCell({ colDef, rowDef, cellDef, data, row, rowIndex })
            : colDef.editable && texts?.cell?.editTooltip
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
