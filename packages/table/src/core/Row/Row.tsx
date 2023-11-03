import * as React from 'react';

import { StyledTableRow } from './StyledTableRow';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';

interface RowProps {
  columnDefs: ColDef[];
  data: { [key: string]: unknown };
  height?: React.CSSProperties['height'];
}

export const Row: React.FC<RowProps> = ({ columnDefs, data, height }) => {
  return (
    <StyledTableRow height={height}>
      {columnDefs.map((columnDef: ColDef) => {
        return (
          <Cell
            columnDef={columnDef}
            key={`cell-${columnDef.colId}`}
            data={data[columnDef.field] ?? ''}
          />
        );
      })}
    </StyledTableRow>
  );
};
