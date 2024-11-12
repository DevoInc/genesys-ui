import React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';

import { Row } from '../Row';
import { TableContext } from '../../context/TableContext';

import { StyledTableBody } from './StyledTableBody';

export interface TableBodyProps {
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  width: number;
  height: number;
}

export const TableBody: React.FC<TableBodyProps> = ({
  columnVirtualizer,
  rowVirtualizer,
  width,
  height,
}) => {
  const { data, id } = React.useContext(TableContext);

  return (
    <StyledTableBody
      $height={height}
      $width={width}
      id={`${id}__body`}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow: VirtualItem) => (
        <Row
          key={'tb_' + virtualRow.key}
          columnVirtualizer={columnVirtualizer}
          rowData={data[virtualRow.index]}
          rowIndex={virtualRow.index}
          height={virtualRow.size}
          start={virtualRow.start}
        />
      ))}
    </StyledTableBody>
  );
};
