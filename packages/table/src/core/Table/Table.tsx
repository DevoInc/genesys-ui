import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

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

  const ref = React.useRef();

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 34,
    overscan: 5,
  });

  const columnVirtualizer = useVirtualizer({
    count: columnsDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 34,
    overscan: 5,
    horizontal: true,
  });
  debugger;

  return (
    <StyledTableWrapper
      maxHeight={style?.wrapper?.maxHeight}
      scrolled={style?.wrapper?.scrolled}
      ref={ref}
      height={'500px'}
    >
      <StyledTable
        width={'100%'}
        minWidth={style?.table?.minWidth}
        height={`${rowVirtualizer.getTotalSize()}px`}
      >
        <TableHead
          columnDefs={columnsDefs}
          columnVirtualizer={columnVirtualizer}
          scrolled={style?.wrapper?.scrolled}
        />
        <TableBody
          data={data}
          columnDefs={columnsDefs}
          rowVirtualizer={rowVirtualizer}
          height={style?.row?.height}
          rowHeight={style?.row?.height}
        />
      </StyledTable>
    </StyledTableWrapper>
  );
};
