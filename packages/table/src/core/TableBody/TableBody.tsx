import React from 'react';

import { Row } from '../Row';

import { ColDef } from '../../declarations';

import { StyledTableBody } from './StyledTableBody';

interface TableBodyProps {
  rowVirtualizer: unknown;
  data: unknown;
  columnDefs: ColDef[];
  height?: React.CSSProperties['height'];
  rowHeight?: number;
}

export const TableBody: React.FC<TableBodyProps> = ({
  columnDefs,
  rowVirtualizer,
  data,
  height,
  rowHeight,
}) => {
  debugger;
  return (
    <StyledTableBody>
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
  );
};
