import styled from 'styled-components';
import { Density } from '../../declarations';

interface StyledTableHeadRowProps {
  density: Density;
}

export const StyledTableHeadRow = styled.tr<StyledTableHeadRowProps>`
  position: relative;
  display: flex;
  height: ${({ theme, density }) => theme.cmp.table.head.size.height[density]};
`;
