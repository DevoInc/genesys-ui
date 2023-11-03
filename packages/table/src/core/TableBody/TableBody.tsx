import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { Row } from '../Row';

import { ColDef } from '../../declarations';

import { StyledTableBody } from './StyledTableBody';

interface TableBodyProps {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  height?: React.CSSProperties['height'];
  rowHeight?: number;
}

export const TableBody: React.FC<TableBodyProps> = ({
  columnDefs,
  data,
  height,
  rowHeight,
}) => {
  const tableContainerRef = React.useRef();

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 34,
    overscan: 1,
  });

  return (
    <StyledTableBody ref={tableContainerRef}>
      {rowVirtualizer?.getVirtualItems().map((d, i) => {
        return (
          <Row
            key={'tb_' + i}
            columnDefs={columnDefs}
            data={data[d.index]}
            height={d.size}
          />
        );
      })}
    </StyledTableBody>
  );
};
