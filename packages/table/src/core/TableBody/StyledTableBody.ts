import styled from 'styled-components';

import { StyledTableProps } from '../TableWrapper/StyledTable';
import { TableProps } from '../Table';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StyledTableBodyProps
  extends Pick<StyledTableProps, '$width' | '$height'>,
    Pick<TableProps, 'highlightColumnsOnHover'> {}

export const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  position: relative;
  display: inline-block;
  height: ${({ $height = 'auto' }) => `${$height}px`};
  width: ${({ $width = '100%' }) => `${$width}px`};
  overflow: ${({ highlightColumnsOnHover }) =>
    highlightColumnsOnHover ? 'hidden' : null};
`;
