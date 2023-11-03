import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ColDef, DefaultColDef, TableOptionsProps } from '../../declarations';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import { ColumnType } from '../../types/declarations';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

const defineColumnsDefs = (
  defaultColumnDef: DefaultColDef,
  columnDefs: ColDef[],
  types: ColumnType[],
): ColDef[] => {
  return columnDefs.map((column) => {
    const type = types.find((element) => element.id === column.type);
    return { ...defaultColumnDef, ...type, ...column };
  });
};

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
    estimateSize: () => 120,
    horizontal: true,
    getItemKey: (index: number) => columnDefs[index].headerName,
  });

  const refinedColumnDefs = defineColumnsDefs(
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
      <StyledTable
        width={`${rowVirtualizer.getTotalSize()}px`}
        height={`${rowVirtualizer.getTotalSize()}px`}
      >
        <TableHead
          scrolled={style?.wrapper?.scrolled}
          columnVirtualizer={columnVirtualizer}
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
