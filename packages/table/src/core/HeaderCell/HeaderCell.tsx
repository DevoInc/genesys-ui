import React from 'react';

import { ColDef } from '../../declarations';

import { StyledHeaderCell } from './StyledHeaderCell';
import { TableContext } from '../Table/context';
import { StyledHeaderCellResizer } from './StyledHeaderCellResizer';

interface HeaderCellProps {
  colDef: ColDef;
  isFilterCell?: boolean;
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
  const { sizes, visualOptions } = React.useContext(TableContext);
  return (
    <StyledHeaderCell
      $width={width}
      horAlign={colDef?.cellStyle?.align?.horizontal}
      offsetX={offsetX}
      paddingHor={`${sizes.cell.horPad}px`}
      paddingVer={`${sizes.cell.verPad}px`}
      title={colDef.headerName}
    >
      {children}
      {(resizable
        ? colDef?.resizable ?? visualOptions?.resizableColumns
        : false) && (
        <StyledHeaderCellResizer
          $height={`${sizes.head.height}px`}
          role="presentation"
          aria-hidden="false"
        />
      )}
    </StyledHeaderCell>
  );
};
