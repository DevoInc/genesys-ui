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
  const ref = React.useRef();

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 34,
    overscan: 10,
  });

  return (
    <div
      ref={ref}
      style={{
        height: '400px',
        overflow: 'auto',
      }}
    >
      <StyledTableBody height={`${rowVirtualizer.getTotalSize()}px`}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          return (
            <Row
              key={'tb_' + virtualItem.key}
              columnDefs={columnDefs}
              data={data[virtualItem.index]}
              styles={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            />
          );
        })}
      </StyledTableBody>
    </div>
  );
};
