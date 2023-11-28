import * as React from 'react';
import { useTheme } from 'styled-components';
import { TableContext } from './context';
import {
  Density,
  RowHeight,
  TableOptionsProps,
  TableStyles,
} from '../../declarations';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable, StyledTableProps } from './StyledTable';
import {
  StyledTableWrapper,
  StyledTableWrapperProps,
} from './StyledTableWrapper';
import { getCollatedColumns, getMeasures } from '../utils';
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
    tableOptions,
  });

  const refinedColumnDefs = getCollatedColumns(
    defaultColumnDef,
    columnDefs,
    types,
  );
  const theme = useTheme();
  const tableBodyHeight = rowVirtualizer?.getTotalSize() || 0;
  const tableHeight = ref?.current?.clientHeight || 0;
  const tableHeadHeight =
    ref?.current?.querySelector('thead')?.clientHeight || 0;
  const hasScroll = tableBodyHeight > tableHeight - tableHeadHeight;

  return (
    <TableContext.Provider
      value={{
        styles: tableOptions.style,
        measures: getMeasures(theme, (tableOptions.style.density = 'default')),
      }}
    >
      <StyledTableWrapper ref={ref} maxHeight={style?.wrapper?.maxHeight}>
        <StyledTable
          width={`${columnVirtualizer.getTotalSize()}px`}
          height={`${rowVirtualizer.getTotalSize()}px`}
        >
          <TableHead
            columnDefs={columnDefs}
            columnVirtualizer={columnVirtualizer}
            scrolled={hasScroll}
          />
          <TableBody
            data={data}
            columnDefs={refinedColumnDefs}
            rowVirtualizer={rowVirtualizer}
            columnVirtualizer={columnVirtualizer}
          />
        </StyledTable>
      </StyledTableWrapper>
    </TableContext.Provider>
  );
};
