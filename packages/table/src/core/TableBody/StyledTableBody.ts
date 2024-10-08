import styled from 'styled-components';

import type { StyledTableProps } from '../TableWrapper/StyledTable';

interface StyledTableBodyProps
  extends Pick<StyledTableProps, '$width' | '$height'> {
}

export const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  position: relative;
  display: inline-block;
  ${({ $height }) => $height && `height: ${$height}px`};
  ${({ $width }) => $width && `width: ${$width}px`}
`;
