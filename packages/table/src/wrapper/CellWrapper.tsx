import * as React from 'react';

import { StyledCellWrapper } from './StyledCellWrapper';
import { TableContext } from '../context';

export const CellWrapper = ({ colDef, rowIndex, data, row }) => {
  const { density, texts } = React.useContext(TableContext);

  return (
    <StyledCellWrapper
      $density={density}
      $horAlign={colDef?.align}
      toEdge={colDef?.toEdge}
      $verAlign={colDef?.verticalAlign}
      title={texts?.cell?.editTooltip}
    >
      {colDef.cellRenderer({
        value: colDef.valueFormatter
          ? colDef.valueFormatter(data, colDef.context)
          : data,
        colDef,
        rowIndex,
        row,
      })}
    </StyledCellWrapper>
  );
};
