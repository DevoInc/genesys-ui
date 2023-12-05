import * as React from 'react';
import { useTheme } from 'styled-components';
import { TableContextProvider } from './context';
import { TableOptionsProps } from '../../declarations';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import { getCollatedColumns, getMeasures } from '../utils';
import { useTableVirtualization } from './useTableVirtualization';
import { useTableScroll } from './useTableScroll';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

export const Table: React.FC<TableProps> = ({ tableOptions, data }) => {
  const ref = React.useRef<HTMLDivElement>();
  const theme = useTheme();
  const measures = getMeasures(
    theme,
    tableOptions.visualOptions?.density ?? 'default',
  );
  const rowHeight =
    measures.row.height[tableOptions.visualOptions?.rowHeight || 'md'];
  const { defaultColumnDef, columnDefs, types, visualOptions } = tableOptions;
  const { rowVirtualizer, columnVirtualizer } = useTableVirtualization({
    data,
    columnDefs,
    rowHeight,
    tableWidth: Math.max(
      tableOptions?.visualOptions?.minWidth,
      ref.current?.offsetWidth,
    ),
    wrapperRef: ref,
  });
  const refinedColumnDefs = getCollatedColumns(
    defaultColumnDef,
    columnDefs,
    types,
  );
  const { hasScroll } = useTableScroll(rowVirtualizer, ref);
  return (
    <TableContextProvider
      value={{
        ...tableOptions,
        measures,
      }}
    >
      <StyledTableWrapper ref={ref} maxHeight={visualOptions?.maxHeight}>
        <StyledTable
          width={`${columnVirtualizer.getTotalSize()}px`}
          height={`${rowVirtualizer.getTotalSize()}px`}
          minWidth={visualOptions?.minWidth}
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
    </TableContextProvider>
  );
};
