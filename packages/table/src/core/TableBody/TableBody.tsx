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
}

export const TableBody: React.FC<TableBodyProps> = ({
  columnDefs,
  rowVirtualizer,
  columnVirtualizer,
  data,
}) => (
  <StyledTableBody>
    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
      return (
        <Row
          key={'tb_' + virtualRow.key}
          columnDefs={columnDefs}
          columnVirtualizer={columnVirtualizer}
          data={data[virtualRow.index]}
          styles={{
            top: 0,
            left: 0,
            position: 'absolute',
            width: '100%',
            height: `${virtualRow.size}px`,
            transform: `translateY(${virtualRow.start}px)`,
          }}
          virtualRow={virtualRow}
        />
      );
    })}
  </StyledTableBody>
);
