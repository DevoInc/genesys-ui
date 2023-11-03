import styled, { css } from 'styled-components';
import { pseudoElementMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../utils';

interface StyledTableRowProps {
  height?: React.CSSProperties['height'];
}

export const StyledTableRow = styled.tr<StyledTableRowProps>``;
