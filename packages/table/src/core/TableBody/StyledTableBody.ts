import styled from 'styled-components';
import { StyledTableProps } from '../Table/StyledTable';
import { TableVisualOptions } from '../../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StyledTableBodyProps
  extends Pick<StyledTableProps, '$width' | '$height'>,
    Pick<TableVisualOptions, 'highlightColumnsOnHover'> {}

export const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  position: relative;
  display: inline-block;
  height: ${({ $height = 'auto' }) => `${$height}px`};
  width: ${({ $width = '100%' }) => `${$width}px`};
  overflow: ${({ highlightColumnsOnHover }) =>
    highlightColumnsOnHover ? 'hidden' : null};
`;
