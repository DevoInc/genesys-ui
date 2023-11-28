import * as React from 'react';
import { useTheme } from 'styled-components';
import { TableContext } from './context';
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
  const theme = useTheme();
  const measures = getMeasures(
    theme,
    (tableOptions.visualOptions.density = 'default'),
  );
  const rowHeight =
    measures.row.height[tableOptions.visualOptions?.row?.height || 'md'];
  const { defaultColumnDef, columnDefs, types, visualOptions } = tableOptions;
  const { rowVirtualizer, columnVirtualizer, ref } = useTableVirtualization({
    data,
    columnDefs,
    rowHeight,
  });
  const refinedColumnDefs = getCollatedColumns(
    defaultColumnDef,
    columnDefs,
    types,
  );
  const { hasScroll } = useTableScroll(rowVirtualizer, ref);
  console.info('hasScroll: ', hasScroll);
  console.info(measures);
  return (
    <TableContext.Provider
      value={{
        visualOptions: tableOptions.visualOptions,
        measures,
      }}
    >
      <StyledTableWrapper
        ref={ref}
        maxHeight={visualOptions?.wrapper?.maxHeight}
      >
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
