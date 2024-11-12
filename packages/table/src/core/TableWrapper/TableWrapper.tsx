import * as React from 'react';
import { useTheme } from 'styled-components';
import { useSize, useUpdateEffect } from 'ahooks';

import { getPxFromRem } from '@devoinc/genesys-ui';

import {
  useTableVirtualizationColumn,
  useTableVirtualizationRow,
} from '../../hooks';
import { TableContext } from '../../context';

import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';

export const TableWrapper: React.FC = () => {
  const theme = useTheme();
  const { maxHeight, data, showFilters, density, rowDefs, colDefs, id } =
    React.useContext(TableContext);

  const ref = React.useRef<HTMLDivElement>();
  const size = useSize(ref);
  const rowVirtualizer = useTableVirtualizationRow({ ref });
  const columnVirtualizer = useTableVirtualizationColumn({
    ref,
    wrapperWidth: size?.width ?? 0,
  });

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
    <StyledTableWrapper
      ref={ref}
      $maxHeight={maxHeight}
      style={{ opacity: size?.width > 0 ? 1 : 0 }}
    >
      <StyledTable
        $height={height}
        $width={width}
        role={'grid'}
        aria-rowcount={data.length}
        aria-colcount={colDefs.length}
        id={id}
      >
        <TableHead
          items={columnVirtualizer?.getVirtualItems() ?? []}
          scrolled={rowVirtualizer.scrollOffset !== 0}
          width={width}
        />
        <TableBody
          columnVirtualizer={columnVirtualizer}
          rowVirtualizer={rowVirtualizer}
          width={width}
          height={height}
        />
      </StyledTable>
    </StyledTableWrapper>
  );
};
