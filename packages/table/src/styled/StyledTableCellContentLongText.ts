import styled, { css } from 'styled-components';

import { cellContentTextMixin } from './mixins';
import { StyledTableCellProps } from './declarations';

export const StyledTableCellContentLongText = styled.div<StyledTableCellProps>`
  ${({ contentEditable, expanded, size, theme, typeProp }) =>
    css`
      ${cellContentTextMixin({
        contentEditable,
        expanded,
        size,
        theme,
        typeProp,
      })}
      ${!expanded &&
      css`
        max-height: none;
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      `}
    `};
`;
