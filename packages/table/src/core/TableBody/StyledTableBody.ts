import styled from 'styled-components';

import type { StyledTableProps } from '../TableWrapper/StyledTable';
import type { ITable } from '../../declarations';

interface StyledTableBodyProps
  extends Pick<StyledTableProps, '$width' | '$height'> {
  $highlightColumnsOnHover: ITable['highlightColumnsOnHover'];
}

export const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  position: relative;
  display: inline-block;
  ${({ $height }) => $height && `height: ${$height}px`};
  ${({ $width }) => $width && `width: ${$width}px`};
  overflow: ${({ $highlightColumnsOnHover }) =>
    $highlightColumnsOnHover ? 'hidden' : null};
`;
