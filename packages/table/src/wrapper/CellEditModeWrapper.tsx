import * as React from 'react';
import { GIPencilEditFilled } from '@devoinc/genesys-icons';

import { StyledEditModeCellWrapper } from './StyledEditModeCellWrapper';
import { StyledCellMarker } from './StyledCellMarker';
import { TableContext } from '../context';

export const CellEditModeWrapper = ({
  row,
  cellDef,
  colDef,
  rowIndex,
  data,
  onCellDataChange,
}) => {
  const { density } = React.useContext(TableContext);
  return (
    <StyledEditModeCellWrapper
      $density={density}
      $horAlign={colDef?.align}
      $isEditMode={cellDef?.isEditMode}
      $toEdge={colDef?.toEdge}
      $verAlign={colDef?.verticalAlign}
    >
      {cellDef?.isEditMode
        ? colDef.cellEditor({
            value: data,
            colDef,
            rowIndex,
            onChange: (value) => {
              onCellDataChange({ colDef, value, rowIndex });
            },
          })
        : colDef.cellRenderer({
            value: colDef.valueFormatter
              ? colDef.valueFormatter(data, colDef.context)
              : data,
            colDef,
            rowIndex,
            row,
          })}
      {colDef.editable && !cellDef?.isEditMode && (
        <StyledCellMarker>
          <GIPencilEditFilled size={10} />
        </StyledCellMarker>
      )}
    </StyledEditModeCellWrapper>
  );
};
