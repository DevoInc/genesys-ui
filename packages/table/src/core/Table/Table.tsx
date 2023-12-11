import * as React from 'react';
import { useTheme } from 'styled-components';
import { TableContextProvider } from './context';
import { TableOptionsProps } from '../../declarations';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import {
  getCollatedColumns,
  getSizes,
  getTableEvalHeight,
  getTableEvalWidth,
} from '../utils';
import { useTableVirtualization } from './useTableVirtualization';
import { useTableScroll } from './useTableScroll';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

export const Table: React.FC<TableProps> = ({ tableOptions, data }) => {
  const ref = React.useRef<HTMLDivElement>();
  const theme = useTheme();
  const sizes = getSizes(
    theme,
    tableOptions.visualOptions?.density ?? 'default',
  );
  const { defaultColumnDef, columnDefs, types, visualOptions } = tableOptions;
  const rowHeight =
    sizes.row.height[
      tableOptions.visualOptions?.rowHeight ||
      columnDefs.find((columnDef) => columnDef.type === 'longText')
        ? 'lg'
        : 'md'
    ];
  const headerHeight = sizes.head.height;
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
  const tableWrapperHeight = ref?.current?.offsetHeight;
  const tableWrapperWidth = ref?.current?.offsetWidth;
  const tableVisibleBodyHeight = tableWrapperHeight - headerHeight;
  const { hasScroll } = useTableScroll(rowVirtualizer, ref);
  const measures = {
    wrapper: {
      height: tableWrapperHeight,
      width: tableWrapperWidth,
    },
    body: {
      total: {
        height: rowVirtualizer?.getTotalSize(),
        width: columnVirtualizer?.getTotalSize(),
      },
      visible: {
        height: tableVisibleBodyHeight,
        width: tableWrapperWidth,
      },
    },
  };

  return (
    <TableContextProvider
      value={{
        visualOptions: {
          ...tableOptions.visualOptions,
        },
        measures: {
          ...measures,
        },
        sizes: {
          ...sizes,
        },
      }}
    >
      <StyledTableWrapper ref={ref} maxHeight={visualOptions?.maxHeight}>
        <StyledTable
          minWidth={visualOptions?.minWidth}
          $height={getTableEvalHeight(measures?.body?.total?.height)}
          $width={getTableEvalWidth(measures?.body?.total?.width)}
        >
          <TableHead
            columnDefs={columnDefs}
            columnVirtualizer={columnVirtualizer}
            scrolled={hasScroll}
          />
          <TableBody
            height={getTableEvalHeight(measures?.body?.total?.height)}
            width={getTableEvalWidth(measures?.body?.total?.width)}
            columnDefs={refinedColumnDefs}
            columnVirtualizer={columnVirtualizer}
            data={data}
            rowVirtualizer={rowVirtualizer}
            visibleHeight={tableVisibleBodyHeight}
          />
        </StyledTable>
      </StyledTableWrapper>
    </TableContextProvider>
  );
};
