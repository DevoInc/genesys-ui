import * as React from 'react';
import { StyledTableRow } from './StyledTableRow';
import { RowProps } from './declarations';
import { Cell } from '../Cell/Cell';
import { ColDef } from '../declarations';

export const Row: React.FC<RowProps> = ({
  columnDefs,
  defaultColumnDefs,
  data,
  style: { height } = {},
}) => (
  <StyledTableRow heightProp={height}>
    {(columnDefs ?? defaultColumnDefs).map((colDef: ColDef) => (
      <Cell
        column={colDef}
        key={`cell-${colDef.colId}`}
        data={data[colDef.field]}
      />
    ))}
  </StyledTableRow>
);
