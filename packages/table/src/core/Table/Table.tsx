import * as React from 'react';
import { TableOptionsProps } from '../../declarations';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
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
  console.info('hasScroll: ', hasScroll);
  console.info('tableBodyHeight: ', tableBodyHeight);
  console.info('tableHeadHeight: ', tableHeadHeight);
  console.info('visibleHeight: ', tableHeight - tableHeadHeight);

  return (
    <StyledTable maxHeight={style?.table?.maxHeight} ref={ref}>
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
  );
};
