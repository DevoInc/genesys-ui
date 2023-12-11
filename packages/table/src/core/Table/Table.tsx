import * as React from 'react';
import { useTheme } from 'styled-components';

import { TableOptionsProps } from '../../declarations';

import { TableContextProvider } from './context';
import { useTableVirtualization } from './useTableVirtualization';
import { useTableScroll } from './useTableScroll';

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

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

export const Table: React.FC<TableProps> = ({ tableOptions, data }) => {
  const theme = useTheme();
  const { defaultColumnDef, columnDefs, types, visualOptions } = tableOptions;

  const ref = React.useRef<HTMLDivElement>();

  const sizes = getSizes(
    theme,
    tableOptions.visualOptions?.density ?? 'default',
  );
  const rowHeight =
    sizes.row.height[
      tableOptions.visualOptions?.rowHeight ||
      columnDefs.find((columnDef) => columnDef.type === 'longText')
        ? 'lg'
        : 'md'
    ];

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
  const tableVisibleBodyHeight = tableWrapperHeight - sizes.head.height;

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
