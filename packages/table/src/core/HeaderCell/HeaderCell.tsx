import React from 'react';

import type { TColDef } from '../../declarations';
import { TableContext } from '../../context/TableContext';

import { OrderIndicator } from './OrderIndicator';
import { StyledHeaderCell } from './StyledHeaderCell';
import { StyledHeaderCellResizer } from './StyledHeaderCellResizer';

interface HeaderCellProps {
  colDef: TColDef;
  width: React.CSSProperties['width'];
  offsetX: number;
  children: React.ReactNode;
  resizable?: boolean;
  onSort?: (colDef: TColDef) => void;
  showFilters?: boolean;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  colDef,
  width,
  offsetX,
  children,
  resizable = true,
  onSort,
  showFilters,
}) => {
  const { density } = React.useContext(TableContext);
  return (
    <StyledHeaderCell
      $width={width}
      $horAlign={colDef?.align || (colDef.preset === 'number' ? 'right' : null)}
      $offsetX={offsetX}
      $density={density}
      title={colDef.headerName}
      onClick={
        colDef.sortable
          ? () => {
              if (onSort) {
                onSort(colDef);
              }
            }
          : null
      }
    >
      {children}
      {colDef.sortable && !showFilters && <OrderIndicator colDef={colDef} />}
      {resizable && (
        <StyledHeaderCellResizer
          $density={density}
          role="presentation"
          aria-hidden="false"
        />
      )}
    </StyledHeaderCell>
  );
};
