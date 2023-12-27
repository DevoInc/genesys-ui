import React from 'react';

import { ColDef } from '../../declarations';

import { StyledHeaderCell } from './StyledHeaderCell';
import { StyledHeaderCellResizer } from './StyledHeaderCellResizer';
import { TableContext } from '../../context/TableContext';

interface HeaderCellProps {
  colDef: ColDef;
  width: React.CSSProperties['width'];
  offsetX: number;
  children: React.ReactNode;
  resizable?: boolean;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  colDef,
  width,
  offsetX,
  children,
  resizable = true,
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
    >
      {children}
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
