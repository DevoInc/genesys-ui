import styled, { css } from 'styled-components';

import { truncateTypoMixin } from '@devoinc/genesys-ui';
import { cellContentTextMixin } from './mixins';
import { StyledTableCellProps } from './declarations';

export const StyledTableCellContentShortText = styled.div<StyledTableCellProps>`
  ${({ contentEditable, editable, expanded, size, theme, typeProp }) =>
    css`
      ${cellContentTextMixin({
        contentEditable,
        editable,
        expanded,
        size,
        theme,
        typeProp,
      })}
      ${!expanded && truncateTypoMixin()}
    `};
`;
