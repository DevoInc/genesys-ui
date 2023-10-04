import React from 'react';

import { Row } from '../Row';

import { ColDef } from '../../declarations';

import { StyledTableBody } from './StyledTableBody';

interface TableBodyProps {
  data: { [key: string]: unknown }[];
  columnDefs: ColDef[];
  height?: React.CSSProperties['height'];
}

export const TableBody: React.FC<TableBodyProps> = ({
  columnDefs,
  data,
  height,
}) => {
  return (
    <StyledTableBody height={height}>
      {data.map((d, i) => {
        return (
          <Row
            key={'tb_' + i}
            columnDefs={columnDefs}
            data={d}
            height={height}
          />
        );
      })}
    </StyledTableBody>
  );
};
