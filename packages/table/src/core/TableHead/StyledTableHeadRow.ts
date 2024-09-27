import styled from 'styled-components';
import type { TDensity } from '../../declarations';

interface StyledTableHeadRowProps {
  $density: TDensity;
}

export const StyledTableHeadRow = styled.tr<StyledTableHeadRowProps>`
  position: relative;
  display: flex;
  height: ${({ theme, $density }) => theme.cmp.table.head.size.height[$density]};
`;
