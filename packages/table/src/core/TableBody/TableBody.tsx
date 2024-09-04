import React from 'react';
import { Row } from '../Row';
import { StyledTableBody } from './StyledTableBody';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { TableContext } from '../../context/TableContext';

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
