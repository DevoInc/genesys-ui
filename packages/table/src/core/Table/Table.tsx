import * as React from 'react';
import { useTheme } from 'styled-components';

import { ColDef, TableOptionsProps } from '../../declarations';

import { TableContextProvider } from './context';

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
import {
  useTableMeasures,
  useTableScroll,
  useTableVirtualizationRow,
  useTableVirtualizationColumn,
} from '../hooks';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

export const Table: React.FC<TableProps> = ({
  tableOptions: { defaultColumnDef, columnDefs, types, visualOptions },
  data,
}) => {
  const theme = useTheme();
  const { density, maxHeight, minWidth } = visualOptions;
  const ref = React.useRef<HTMLDivElement>();

  const refinedColumnDefs: ColDef[] = columnDefs.map((column) =>
    getCollatedColumns(defaultColumnDef, column, types),
  );

  const sizes = getSizes(theme, density);

  const rowVirtualizer = useTableVirtualizationRow({
    data,
    columnDefs,
    visualOptions,
    wrapperRef: ref,
    sizes,
  });

  const columnVirtualizer = useTableVirtualizationColumn({
    columnDefs,
    visualOptions,
    wrapperRef: ref,
  });

  const { hasScroll } = useTableScroll(rowVirtualizer, ref);

  const { measures } = useTableMeasures({
    ref,
    rowVirtualizer,
    columnVirtualizer,
    sizes,
  });

  return (
    <TableContextProvider
      value={{
        visualOptions,
        measures,
        sizes,
      }}
    >
      <StyledTableWrapper ref={ref} maxHeight={maxHeight}>
        <StyledTable
          minWidth={minWidth}
          $height={getTableEvalHeight(measures?.body?.total?.height)}
          $width={getTableEvalWidth(measures?.body?.total?.width)}
        >
          <TableHead
            columnDefs={refinedColumnDefs}
            columnVirtualizer={columnVirtualizer}
            scrolled={hasScroll}
          />
          <TableBody
            columnDefs={refinedColumnDefs}
            columnVirtualizer={columnVirtualizer}
            data={data}
            rowVirtualizer={rowVirtualizer}
          />
        </StyledTable>
      </StyledTableWrapper>
    </TableContextProvider>
  );
};
