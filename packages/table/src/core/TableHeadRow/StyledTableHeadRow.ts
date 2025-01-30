import styled from 'styled-components';

import type { TDensity } from '../../declarations';

interface StyledTableHeadRowProps {
  $density: TDensity;
  $compactHeader?: boolean;
}

export const StyledTableHeadRow = styled.tr<StyledTableHeadRowProps>`
  position: relative;
  display: flex;
  height: ${({ theme, $density, $compactHeader = false }) =>
    $compactHeader ? '2rem' : theme.cmp.table.head.size.height[$density]};
`;
