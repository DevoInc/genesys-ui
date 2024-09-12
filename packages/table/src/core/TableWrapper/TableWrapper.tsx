import * as React from 'react';
import { useTheme } from 'styled-components';
import { useUpdateEffect } from 'ahooks';

import { getPxFromRem } from '@devoinc/genesys-ui';

import {
  useWrapperObserver,
  useTableScroll,
  useTableVirtualizationColumn,
  useTableVirtualizationRow,
} from '../../hooks';
import { TableContext, WrapperContext } from '../../context';

import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';

export const TableWrapper: React.FC = () => {
  const theme = useTheme();
  const { maxHeight, colDefs, data, showFilters, density, rowDefs } =
    React.useContext(TableContext);
  const { width: wrapperWidth } = React.useContext(WrapperContext);

  const { ref } = useWrapperObserver();
  const rowVirtualizer = useTableVirtualizationRow({ ref });
  const columnVirtualizer = useTableVirtualizationColumn({ ref });
  const { hasScroll } = useTableScroll(rowVirtualizer, ref);
  const width = columnVirtualizer.getTotalSize();
  const rowsTotalSize = rowVirtualizer.getTotalSize();

  const headHeight = React.useMemo(
    () => getPxFromRem(theme.cmp.table.head.size.height[density]),
    [density, theme],
  );
  const height =
    (rowsTotalSize === 0 ? 1 : rowsTotalSize) +
    headHeight * (showFilters ? 2 : 1);

  useUpdateEffect(() => {
    rowVirtualizer.measure();
  }, [rowDefs, data]);

  return (
    <StyledTableWrapper ref={ref} $maxHeight={maxHeight}>
      {wrapperWidth > 0 ? (
        <StyledTable $height={height} $width={width}>
          <TableHead
            colDefs={colDefs}
            columnVirtualizer={columnVirtualizer}
            scrolled={hasScroll}
            data={data}
            width={width}
          />
          <TableBody
            columnVirtualizer={columnVirtualizer}
            rowVirtualizer={rowVirtualizer}
            width={width}
            height={height}
          />
        </StyledTable>
      ) : null}
    </StyledTableWrapper>
  );
};
