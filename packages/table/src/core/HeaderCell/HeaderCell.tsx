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
  title?: string;
  filter?: boolean;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  colDef,
  width,
  offsetX,
  children,
  title,
  filter
}) => {
  const { density, onSort, resizableColumns } = React.useContext(TableContext);

  return (
    <StyledHeaderCell
      $width={width}
      $horAlign={colDef?.align}
      $offsetX={offsetX}
      $density={density}
      title={title}
      onClick={
        colDef.sortable && !filter
          ? () => {
              if (onSort) {
                onSort(colDef);
              }
            }
          : null
      }
    >
      {children}
      {colDef.sortable && !filter && <OrderIndicator colDef={colDef} />}
      {(colDef?.resizable ?? resizableColumns) && (
        <StyledHeaderCellResizer
          $density={density}
          role="presentation"
          aria-hidden="false"
        />
      )}
    </StyledHeaderCell>
  );
};
