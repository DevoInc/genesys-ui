import * as React from 'react';
import { TableOptionsProps } from '../../declarations';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import { getCollatedColumns } from '../utils';
import { useTableVirtualization } from './useTableVirtualization';
import { useTableScroll } from './useTableScroll';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

export const Table: React.FC<TableProps> = ({ tableOptions, data }) => {
  const { defaultColumnDef, columnDefs, types, style } = tableOptions;
  const { rowVirtualizer, columnVirtualizer, ref } = useTableVirtualization({
    data,
    columnDefs,
    tableOptions,
  });

  const refinedColumnDefs = getCollatedColumns(
    defaultColumnDef,
    columnDefs,
    types,
  );

  const { hasScroll } = useTableScroll(rowVirtualizer, ref);

  return (
    <StyledTableWrapper
      ref={ref}
      maxHeight={style?.wrapper?.maxHeight}
      scrolled={style?.wrapper?.scrolled}
    >
      <StyledTable
        width={`${columnVirtualizer.getTotalSize()}px`}
        height={`${rowVirtualizer.getTotalSize()}px`}
      >
        <TableHead
          scrolled={hasScroll}
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
