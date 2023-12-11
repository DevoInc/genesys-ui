import React from 'react';

import { ColDef } from '../../declarations';

import { Typography } from '@devoinc/genesys-ui';

import { StyledHeaderCell } from './StyledHeaderCell';
import { TableContext } from '../Table/context';
import { StyledHeaderCellResizer } from './StyledHeaderCellResizer';

interface HeaderCellProps {
  colDef: ColDef;
  width: React.CSSProperties['width'];
  offsetX: number;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  colDef,
  width,
  offsetX,
}) => {
  const { sizes, visualOptions } = React.useContext(TableContext);
  const resizable = colDef?.resizable ?? visualOptions?.resizableColumns;

  return (
    <StyledHeaderCell
      $width={width}
      horAlign={
        colDef?.cellStyle?.align?.horizontal || colDef.type === 'number'
          ? 'right'
          : null
      }
      resizable={visualOptions.resizableColumns ?? colDef?.resizable}
      offsetX={offsetX}
      paddingHor={`${sizes.cell.horPad}px`}
      paddingVer={`${sizes.cell.verPad}px`}
      title={colDef.headerName}
    >
      <Typography.Heading size="h6" truncateLine={1}>
        {colDef.headerName}
      </Typography.Heading>
      {resizable && (
        <StyledHeaderCellResizer
          $height={`${sizes.head.height}px`}
          role="presentation"
          aria-hidden="false"
        />
      )}
    </StyledHeaderCell>
  );
};
