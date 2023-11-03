import * as React from 'react';

import { TableOptionsProps } from '../../declarations';

import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';

import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

const defineColumnsDefs = (defaultColumnDef, columnDefs, types) => {
  return columnDefs.map((column) => {
    const type = types.find((element) => element.id === column.type);
    return { ...defaultColumnDef, ...type, ...column };
  });
};

export const Table: React.FC<TableProps> = ({ tableOptions, data }) => {
  const { defaultColumnDef, columnDefs, types, style } = tableOptions;

  const columnsDefs = defineColumnsDefs(defaultColumnDef, columnDefs, types);

  return (
    <StyledTableWrapper
      maxHeight={style?.wrapper?.maxHeight}
      scrolled={style?.wrapper?.scrolled}
    >
      <StyledTable
        width={'400px'}
        minWidth={style?.table?.minWidth}
        height={'200px'}
      >
        <TableHead
          columnDefs={columnsDefs}
          scrolled={style?.wrapper?.scrolled}
        />
        <TableBody
          columnDefs={columnsDefs}
          data={data}
          height={style?.row?.height}
          rowHeight={style?.row?.height}
        />
      </StyledTable>
    </StyledTableWrapper>
  );
};
