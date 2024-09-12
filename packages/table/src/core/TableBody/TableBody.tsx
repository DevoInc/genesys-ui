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
  const { highlightColumnsOnHover, data } = React.useContext(TableContext);

  return (
    <StyledTableBody
      $height={height}
      $width={width}
      highlightColumnsOnHover={highlightColumnsOnHover}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow: VirtualItem) => {
        return (
          <Row
            key={'tb_' + virtualRow.key}
            columnVirtualizer={columnVirtualizer}
            data={data[virtualRow.index]}
            virtualRow={virtualRow}
          />
        );
      })}
    </StyledTableBody>
  );
};
