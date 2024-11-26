import * as React from 'react';

import { StyledCellWrapper } from './StyledCellWrapper';
import { TableContext } from '../../context';
import type { TCellWrapper } from '../declarations';
import { TextRenderer } from '../../renderers';

export const CellWrapper: React.FC<TCellWrapper> = ({
  colDef,
  rowIndex,
  data,
  row,
}) => {
  const { density, texts } = React.useContext(TableContext);
  const CellRenderer = colDef?.cellRenderer ?? TextRenderer;
  return (
    <StyledCellWrapper
      $density={density}
      $horAlign={colDef?.align}
      $toEdge={colDef?.toEdge}
      $verAlign={colDef?.verticalAlign}
      title={texts?.cell?.editTooltip}
    >
      <CellRenderer
        value={
          colDef.valueFormatter
            ? colDef.valueFormatter(data, colDef.context)
            : data
        }
        colDef={colDef}
        rowIndex={rowIndex}
        row={row}
      />
    </StyledCellWrapper>
  );
};
