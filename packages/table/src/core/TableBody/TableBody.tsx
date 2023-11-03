import React from 'react';
import { Row } from '../Row';
import { ColDef } from '../../declarations';
import { StyledTableBody } from './StyledTableBody';
import { Virtualizer } from '@tanstack/react-virtual';

interface TableBodyProps {
  rowVirtualizer: Virtualizer<undefined, Element>;
  columnVirtualizer: Virtualizer<undefined, Element>;
  data: unknown;
  columnDefs: ColDef[];
  height?: React.CSSProperties['height'];
  rowHeight?: number;
}

export const TableBody: React.FC<TableBodyProps> = ({
  columnDefs,
  rowVirtualizer,
  columnVirtualizer,
  data,
}) => (
  <StyledTableBody>
    {rowVirtualizer.getVirtualItems().map((virtualItem) => {
      return (
        <Row
          key={'tb_' + virtualItem.key}
          columnDefs={columnDefs}
          columnVirtualizer={columnVirtualizer}
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
