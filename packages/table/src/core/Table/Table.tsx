import * as React from 'react';
import {
  useVirtualizer,
  VirtualItem,
  Virtualizer,
} from '@tanstack/react-virtual';
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

const getVirtualItemWidth = (
  rowVirtualizer: Virtualizer<undefined, Element>,
  key: string | number,
): number =>
  rowVirtualizer
    .getVirtualItems()
    .find((virtualRow: VirtualItem) => virtualRow.index === key)?.size;

const defineColumnsDefs = (
  defaultColumnDef: DefaultColDef,
  columnDefs: ColDef[],
  types: ColumnType[],
  rowVirtualizer: Virtualizer<undefined, Element>,
): ColDef[] => {
  return columnDefs.map((column, index) => {
    const type = types.find((element) => element.id === column.type);
    const cellStyle = {
      ...column.cellStyle,
      minWidth: getVirtualItemWidth(rowVirtualizer, index),
    };
    return { ...defaultColumnDef, ...type, ...column, cellStyle };
  });
};

export const Table: React.FC<TableProps> = ({ tableOptions, data }) => {
  const { defaultColumnDef, columnDefs, types, style } = tableOptions;

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 34,
  });

  const columnsDefs = defineColumnsDefs(
    defaultColumnDef,
    columnDefs,
    types,
    rowVirtualizer,
  );

  const ref = React.useRef();

  const columnVirtualizer = useVirtualizer({
    count: columnsDefs.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 300,
    horizontal: true,
    getItemKey: (index: number) => columnDefs[index].headerName,
  });

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
          scrolled={style?.wrapper?.scrolled}
        />
        <TableBody
          data={data}
          columnDefs={columnsDefs}
          rowVirtualizer={rowVirtualizer}
          columnVirtualizer={columnVirtualizer}
          height={style?.row?.height}
          rowHeight={style?.row?.height}
        />
      </StyledTable>
    </StyledTableWrapper>
  );
};
