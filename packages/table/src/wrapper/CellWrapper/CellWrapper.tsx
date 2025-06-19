import * as React from 'react';

import { StyledCellWrapper } from './StyledCellWrapper';
import { TableContext } from '../../context';
import type { TCellWrapper } from '../../declarations';
import { TextRenderer } from '../../renderers';

export const CellWrapper: React.FC<TCellWrapper> = ({
  cellDef,
  colDef,
  data,
  height,
  row,
  rowIndex,
  width,
}) => {
  const { density, texts } = React.useContext(TableContext);
  const CellRenderer = colDef?.cellRenderer ?? TextRenderer;

  return (
    <StyledCellWrapper
      $density={density}
      $hasActions={colDef.preset === 'actions'}
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
        cellDef={cellDef}
        colDef={colDef}
        height={height}
        rowIndex={rowIndex}
        row={row}
        width={width}
      />
    </StyledCellWrapper>
  );
};
