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
  filter,
}) => {
  const {
    density,
    resizableColumns,
    onHeaderCellDoubleClick,
    onHeaderCellKeyUp,
    onHeaderCellKeyDown,
    onHeaderCellClick,
  } = React.useContext(TableContext);

  return (
    <StyledHeaderCell
      $width={width}
      $horAlign={colDef?.align}
      $offsetX={offsetX}
      $density={density}
      title={title}
      tabIndex={0}
      onClick={() => {
        if (onHeaderCellClick) {
          onHeaderCellClick({ colDef, filter });
        }
      }}
      onDoubleClick={() => {
        if (onHeaderCellDoubleClick) {
          onHeaderCellDoubleClick({ colDef });
        }
      }}
      onKeyUp={(event) => {
        if (onHeaderCellKeyUp) {
          onHeaderCellKeyUp({ event, colDef });
        }
      }}
      onKeyDown={(event) => {
        if (onHeaderCellKeyDown) {
          onHeaderCellKeyDown({ event, colDef });
        }
      }}
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
