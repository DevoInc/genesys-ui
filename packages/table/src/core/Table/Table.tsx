import * as React from 'react';
import { useTheme } from 'styled-components';

import { ColDef, Data, TableOptionsProps } from '../../declarations';

import { TableContextProvider } from './context';

import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';

import { getCollatedColumns, getSizes } from '../utils';
import {
  useTableMeasures,
  useTableScroll,
  useTableVirtualizationRow,
  useTableVirtualizationColumn,
} from '../hooks';

interface TableProps {
  data: Data;
  options: TableOptionsProps;
}

export const Table: React.FC<TableProps> = ({
  options: {
    defaultColDef,
    colDefs,
    columnPresets,
    visualOptions,
    showFilters,
  },
  data,
}) => {
  const theme = useTheme();
  const { density, maxHeight } = visualOptions || {};
  const ref = React.useRef<HTMLDivElement>();

  const refinedColDefs: ColDef[] = colDefs.map((column) =>
    getCollatedColumns(defaultColDef, column, columnPresets),
  );

  const sizes = getSizes(theme, density);

  const rowVirtualizer = useTableVirtualizationRow({
    data,
    colDefs,
    visualOptions,
    wrapperRef: ref,
    sizes,
  });

  const columnVirtualizer = useTableVirtualizationColumn({
    colDefs,
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
        colDefs,
        showFilters,
      }}
    >
      <StyledTableWrapper ref={ref} maxHeight={maxHeight}>
        <StyledTable
          $height={`${measures?.body.total.height}px`}
          $width={`${measures?.body.total.width}px`}
        >
          <TableHead
            colDefs={refinedColDefs}
            columnVirtualizer={columnVirtualizer}
            scrolled={hasScroll}
            data={data}
          />
          <TableBody
            colDefs={refinedColDefs}
            columnVirtualizer={columnVirtualizer}
            data={data}
            rowVirtualizer={rowVirtualizer}
          />
        </StyledTable>
      </StyledTableWrapper>
    </TableContextProvider>
  );
};
