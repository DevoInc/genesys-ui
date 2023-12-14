import * as React from 'react';
import styled from 'styled-components';

import { CELL_ALIGN_MAP } from '../../constants';

import { StyledTableCellWrapperProps } from '../Cell/StyledTableCellWrapper';
import { cellMixin } from '../helpers';

interface StyledHeaderCellProps
  extends Pick<
    StyledTableCellWrapperProps,
    'horAlign' | 'paddingHor' | 'paddingVer'
  > {
  $width: React.CSSProperties['width'];
  offsetX?: number;
  resizable?;
}

export const StyledHeaderCell = styled.th<StyledHeaderCellProps>`
  ${({ theme }) => cellMixin({ theme })}
  left: 0;
  justify-content: space-between;
  transform: ${({ offsetX }) => `translateX(${offsetX}px)`};
  width: ${({ $width }) => $width};
  height: 100%;
  padding: ${({ paddingVer, paddingHor }) => `${paddingVer} ${paddingHor}`};
`;
