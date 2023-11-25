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

  const tableBodyHeight = rowVirtualizer?.getTotalSize() || 0;
  const tableHeight = ref?.current?.clientHeight || 0;
  const tableHeadHeight =
    ref?.current?.querySelector('thead')?.clientHeight || 0;
  const hasScroll = tableBodyHeight > tableHeight - tableHeadHeight;

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
