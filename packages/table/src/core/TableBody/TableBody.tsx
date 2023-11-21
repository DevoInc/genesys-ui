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
  <StyledTableBody
    $height={`${rowVirtualizer.getTotalSize()}px`}
    $width={`${columnVirtualizer.getTotalSize()}px`}
  >
    {rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
      return (
        <Row
          key={'tb_' + virtualRow.key}
          columnDefs={columnDefs}
          columnVirtualizer={columnVirtualizer}
          data={data[virtualRow.index]}
          even={(index + 1) % 2 === 0}
          styles={{
            height: `${virtualRow.size}px`,
            transform: `translateY(${
              virtualRow.start - index * virtualRow.size
            }px)`,
            width: '100%',
            position: 'relative',
          }}
        />
      );
    })}
  </StyledTableBody>
);
