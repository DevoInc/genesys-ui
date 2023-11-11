import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { TableOptionsProps } from '../../declarations';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import { getCollatedColumns } from '../utils';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

export const Table: React.FC<TableProps> = ({ tableOptions, data }) => {
  const { defaultColumnDef, columnDefs, types, style } = tableOptions;

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 30,
  });

  const columnVirtualizer = useVirtualizer({
    count: columnDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 10,
    horizontal: true,
    getItemKey: (index: number) => columnDefs[index].id,
  });

  const refinedColumnDefs = getCollatedColumns(
    defaultColumnDef,
    columnDefs,
    types,
  );

  const ref = React.useRef();

  return (
    <StyledTableWrapper
      maxHeight={style?.wrapper?.maxHeight}
      scrolled={style?.wrapper?.scrolled}
      ref={ref}
      height={'500px'}
    >
      <StyledTable>
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
