import * as React from 'react';
import { useUpdateEffect } from 'ahooks';

import { getPxFromRem } from '@devoinc/genesys-ui';

import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import { TableContext } from '../../context/TableContext';
import {
  useWrapperObserver,
  useTableScroll,
  useTableVirtualizationColumn,
  useTableVirtualizationRow,
} from '../../hooks';
import { WrapperContext } from '../../context';
import { useTheme } from 'styled-components';

export const TableWrapper: React.FC = () => {
  const { ref } = useWrapperObserver();
  const theme = useTheme();
  const { maxHeight, colDefs, data, showFilters, density, rowDefs } =
    React.useContext(TableContext);
  const { width: wrapperWidth } = React.useContext(WrapperContext);

  const rowVirtualizer = useTableVirtualizationRow({ ref });
  const columnVirtualizer = useTableVirtualizationColumn({ ref });
  const { hasScroll } = useTableScroll(rowVirtualizer, ref);
  const width = columnVirtualizer.getTotalSize();
  const headHeight = React.useMemo(
    () => getPxFromRem(theme.cmp.table.head.size.height[density]),
    [density, theme],
  );
  const rowsTotalSize = rowVirtualizer.getTotalSize();
  const height =
    (rowsTotalSize === 0 ? 1 : rowsTotalSize) +
    headHeight * (showFilters ? 2 : 1);

  useUpdateEffect(() => {
    rowVirtualizer.measure();
  }, [rowDefs, data]);

  return (
    <StyledTableWrapper ref={ref} maxHeight={maxHeight}>
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
