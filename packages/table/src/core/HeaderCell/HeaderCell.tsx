import React from 'react';

import { ColDef } from '../../declarations';

import { StyledHeaderCell } from './StyledHeaderCell';
import { StyledHeaderCellResizer } from './StyledHeaderCellResizer';
import { TableContext } from '../../context/TableContext';
import { OrderIndicator } from './OrderIndicator';

interface HeaderCellProps {
  colDef: ColDef;
  width: React.CSSProperties['width'];
  offsetX: number;
  children: React.ReactNode;
  resizable?: boolean;
  onSort?: (colDef) => void;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  colDef,
  width,
  offsetX,
  children,
  resizable = true,
  onSort,
}) => {
  const { density } = React.useContext(TableContext);
  return (
    <StyledHeaderCell
      $width={width}
      horAlign={
        colDef?.cellStyle?.align?.horizontal ||
        (colDef.preset === 'number' ? 'right' : null)
      }
      offsetX={offsetX}
      density={density}
      title={colDef.headerName}
      onClick={() => {
        onSort(colDef);
      }}
    >
      {children}
      <OrderIndicator colDef={colDef} />
      {resizable && (
        <StyledHeaderCellResizer
          density={density}
          role="presentation"
          aria-hidden="false"
        />
      )}
    </StyledHeaderCell>
  );
};
