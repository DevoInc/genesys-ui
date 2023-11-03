import styled, { css } from 'styled-components';
import { pseudoElementMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../utils';

interface StyledTableRowProps {
  styles?: React.CSSProperties;
}

export const StyledTableRow = styled.tr<StyledTableRowProps>`
  position: ${({ styles }) => styles.position};
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ styles }) => styles.height};
  transform: ${({ styles }) => styles.transform};
`;
