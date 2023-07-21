import styled from 'styled-components';

import { cellContentTextMixin } from './mixins';
import { StyledTableCellProps } from './declarations';

export const StyledTableCellContentText = styled.div<StyledTableCellProps>`
  ${({ contentEditable, expanded, size, theme, typeProp }) =>
    cellContentTextMixin({ contentEditable, expanded, size, theme, typeProp })};
`;
