import * as React from 'react';
import { useClickAway } from 'ahooks';

import { GIPencilEditFilled } from '@devoinc/genesys-icons';

import { StyledEditModeCellWrapper } from './StyledEditModeCellWrapper';
import { StyledCellMarker } from '../StyledCellMarker';
import { TableContext } from '../../context';
import type { TCellWrapper } from '../../declarations';
import type { TCellEditor, TCellRenderer } from '../../declarations';

export const CellEditModeWrapper: React.FC<TCellWrapper> = ({
  row,
  cellDef,
  colDef,
  rowIndex,
  data,
  onCellDataChange,
  width,
  height,
}) => {
  const { density, onCellClickAway } = React.useContext(TableContext);
  const CellRenderer: React.FC<TCellRenderer> = colDef.cellRenderer;
  const CellEditor: React.FC<TCellEditor> = colDef.cellEditor;

  const ref = React.useRef<HTMLButtonElement>(null);

  useClickAway(() => {
    if (cellDef?.isEditMode) {
      onCellClickAway('isEditMode');
    }
  }, ref);

  return (
    <StyledEditModeCellWrapper
      $density={density}
      $horAlign={colDef?.align}
      $isEditMode={cellDef?.isEditMode}
      $toEdge={colDef?.toEdge}
      $verAlign={colDef?.verticalAlign}
      ref={ref}
    >
      {cellDef?.isEditMode ? (
        <CellEditor
          value={data}
          colDef={colDef}
          rowIndex={rowIndex}
          onChange={(value) => {
            onCellDataChange({ colDef, value, rowIndex });
          }}
        />
      ) : (
        <CellRenderer
          value={
            colDef.valueFormatter
              ? colDef.valueFormatter(data, colDef.context)
              : data
          }
          colDef={colDef}
          rowIndex={rowIndex}
          row={row}
          width={width}
          height={height}
        />
      )}
      {colDef.editable && !cellDef?.isEditMode && (
        <StyledCellMarker>
          <GIPencilEditFilled size={10} />
        </StyledCellMarker>
      )}
    </StyledEditModeCellWrapper>
  );
};
