import styled, { css } from 'styled-components';
import { getZindexMap } from '../constants';
import { pseudoElementOverlayMixin } from '@devoinc/genesys-ui';
import { StyledTableCellProps } from './declarations';
import { StyledTableRow } from '../components/Row/StyledTableRow';
import { getSizes } from '../components/utils';

export const StyledTableCell = styled.td<StyledTableCellProps>`
  ${({ widthProp }) => css`
    width: ${widthProp + 'px'};
  `}

  position: relative;
  box-sizing: border-box;
  vertical-align: middle;

  // borders
  border-style: solid;

  ${({ theme, isAfterRow }) => {
    const tokens = theme.cmp.table;
    const cmpTokens = tokens.cell;

    const borderSize = cmpTokens.shape.borderSize;
    const borderColor = cmpTokens.color.border;

    return css`
      // after row
      ${isAfterRow &&
      css`
        border-right-width: ${borderSize};
        border-left-width: ${borderSize};
        border-right-color: ${borderColor};
        border-left-color: ${borderColor};
      `};
    `;
  }}

  ${({
    bodyHeight,
    expandedRow,
    isAfterRow,
    columnHighlight,
    highlighted,
    rowHighlight,
    striped,
    tableHeight,
    theme,
  }) => {
    const tokens = theme.cmp.table;
    const cmpTokens = tokens.cell;
    const hoverBgColor = striped
      ? cmpTokens.color.background.backdrop.hovered.strong
      : cmpTokens.color.background.backdrop.hovered.base;
    const calcTableHeight =
      bodyHeight && tableHeight && bodyHeight > tableHeight
        ? tableHeight + 'px'
        : bodyHeight
        ? bodyHeight + 'px'
        : '9999px';
    const borderRadius = getSizes(tokens).row.br;
    return css`
      // highlight overlay for rows on hover
      // highlight overlay for columns on hover
      // pseudo overlay to add effects (if is not after row
      // to avoid problems with overlay)

      // no after row ----------------------------------------------------------

      ${!isAfterRow &&
      css`
        &::before {
          ${pseudoElementOverlayMixin()}
        }

        // row highlight - mouse events in row parent - before layer
        ${rowHighlight &&
        css`
          ${StyledTableRow}:hover > &::before,
          ${StyledTableRow}:focus > &::before,
          ${StyledTableRow}:active > &::before {
            background-color: ${hoverBgColor};
          }
        `}

        // column highlight - hover - after layer
        ${columnHighlight &&
        !highlighted &&
        css`
          &:hover::after {
            background-color: ${cmpTokens.color.background.backdrop.hovered
              .base};
            ${pseudoElementOverlayMixin()};
            height: ${`calc(${calcTableHeight} * 2)`};
            top: ${`calc(${calcTableHeight} * -1)`};
            z-index: ${getZindexMap(theme).columnHighlight};
            pointer-events: none;
          }
        `}

        // border radius of first and last child for radius of row
        ${!expandedRow &&
        css`
          &:first-child,
          &:first-child::before {
            border-radius: ${borderRadius} 0 0 ${borderRadius};
          }
          &:last-child,
          &:last-child::before {
            border-radius: 0 ${borderRadius} ${borderRadius} 0;
          }
        `};
      `};
    `;
  }}
`;
