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
  useTableVirtualization,
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

  const ref = React.useRef<HTMLDivElement>();
  const refinedColumnDefs: ColDef[] = getCollatedColumns(
    defaultColumnDef,
    columnDefs,
    types,
  );
  const sizes = getSizes(theme, visualOptions?.density ?? 'default');

  const { rowVirtualizer, columnVirtualizer } = useTableVirtualization({
    data,
    columnDefs,
    visualOptions,
    wrapperRef: ref,
    sizes,
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
      <StyledTableWrapper ref={ref} maxHeight={visualOptions?.maxHeight}>
        <StyledTable
          minWidth={visualOptions?.minWidth}
          $height={getTableEvalHeight(measures?.body?.total?.height)}
          $width={getTableEvalWidth(measures?.body?.total?.width)}
        >
          <TableHead
            columnDefs={refinedColumnDefs}
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
          />
        </StyledTable>
      </StyledTableWrapper>
    </TableContextProvider>
  );
};
