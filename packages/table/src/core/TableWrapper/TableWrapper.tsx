import * as React from 'react';

import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import { TableContext } from '../../context/TableContext';
import {
  useWrapperOberver,
  useTableScroll,
  useTableVirtualizationColumn,
  useTableVirtualizationRow,
} from '../../hooks';
import { WrapperContext } from '../../context';

export const TableWrapper: React.FC = () => {
  const { ref } = useWrapperOberver();
  const { maxHeight, colDefs, data } = React.useContext(TableContext);
  const { width: wrapperWidth } = React.useContext(WrapperContext);

  const rowVirtualizer = useTableVirtualizationRow({ ref });
  const columnVirtualizer = useTableVirtualizationColumn({ ref });

  const { hasScroll } = useTableScroll(rowVirtualizer, ref);

  const width = columnVirtualizer.getTotalSize();
  const height = rowVirtualizer.getTotalSize();

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
            colDefs={colDefs}
            columnVirtualizer={columnVirtualizer}
            data={data}
            rowVirtualizer={rowVirtualizer}
            width={width}
            height={height}
          />
        </StyledTable>
      ) : null}
    </StyledTableWrapper>
  );
};
