import styled from 'styled-components';
import { cellContentTextMixin } from '../../../styled/mixins/cellContentTextMixin';

export const StyledTableCellContentText = styled.div`
  ${({ contentEditable, expanded, size, theme, typeProp }) =>
    cellContentTextMixin({ contentEditable, expanded, size, theme, typeProp })};
`;
