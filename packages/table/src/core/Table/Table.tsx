import * as React from 'react';
import { TableOptionsProps } from '../../declarations';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import { getCollatedColumns } from '../utils';
import { useTableVirtualization } from './useTableVirtualization';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

export const Table: React.FC<TableProps> = ({ tableOptions, data }) => {
  const { defaultColumnDef, columnDefs, types, style } = tableOptions;
  const { rowVirtualizer, columnVirtualizer, ref } = useTableVirtualization({
    data,
    columnDefs,
  });

  const refinedColumnDefs = getCollatedColumns(
    defaultColumnDef,
    columnDefs,
    types,
  );

  return (
    <StyledTableWrapper
      ref={ref}
      maxHeight={style?.wrapper?.maxHeight}
      scrolled={style?.wrapper?.scrolled}
      height={'500px'}
    >
      <StyledTable
        width={`${columnVirtualizer.getTotalSize()}px`}
        height={`${rowVirtualizer.getTotalSize()}px`}
      >
        <TableHead
          scrolled={style?.wrapper?.scrolled}
          columnVirtualizer={columnVirtualizer}
          columnDefs={columnDefs}
        />
        <TableBody
          data={data}
          columnDefs={refinedColumnDefs}
          rowVirtualizer={rowVirtualizer}
          columnVirtualizer={columnVirtualizer}
        />
      </StyledTable>
    </StyledTableWrapper>
  );
};
