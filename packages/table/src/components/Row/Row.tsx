import * as React from 'react';
import { useAnimationRow } from './useAnimationRow';
import { StyledTableRow } from './StyledTableRow';
import { RowProps } from './declarations';
import { Cell } from '../Cell/Cell';
import { ColDef } from '../Cell/declarations';

export const Row: React.FC<RowProps> = ({
  columnDefs,
  defaultColumnDefs,
  data,
  style: { isVirtual, even, height } = {},
}) => {
  const { isModifiedRow, isActiveRow } = useAnimationRow();

  return (
    <StyledTableRow
      even={even}
      heightProp={height}
      highlighted={isActiveRow}
      isVirtual={isVirtual}
      modified={isModifiedRow}
    >
      {(columnDefs ?? defaultColumnDefs).map((colDef: ColDef) => (
        <Cell
          column={colDef}
          key={`cell-${colDef.colId}`}
          data={data[colDef.field]}
        />
      ))}
    </StyledTableRow>
  );
};
