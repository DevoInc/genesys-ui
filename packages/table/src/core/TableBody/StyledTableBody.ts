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
  height: ${({ $height }) => ($height !== 0 ? `${$height}px` : 'auto')};
  width: ${({ $width }) => ($width !== 0 ? `${$width}px` : '100%')};
  overflow: ${({ highlightColumnsOnHover }) =>
    highlightColumnsOnHover ? 'hidden' : null};
`;
