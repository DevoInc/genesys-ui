import * as React from 'react';

import { StyledTableRow } from './StyledTableRow';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';

interface RowProps {
  columnDefs: ColDef[];
  data: { [key: string]: unknown };
  styles?: React.CSSProperties;
}

export const Row: React.FC<RowProps> = ({ columnDefs, data, styles }) => {
  return (
    <StyledTableRow styles={styles}>
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
