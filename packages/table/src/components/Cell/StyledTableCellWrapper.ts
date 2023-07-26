import styled, { css } from 'styled-components';

import { pseudoElementMixin } from '@devoinc/genesys-ui';
import { getSizesObj, getZindexMap } from '../../constants';

import { StyledTableCell } from '../../styled/StyledTableCell';
import { StyledTableCellProps } from '../../styled/declarations';
import { ColDef } from './declarations';
import { StyledTableRow } from '../Row/StyledTableRow';

const getPaddingVer = ({ editable, expandedRow, tall, sizes }) => {
  if (expandedRow) return sizes.afterRow.verPad;
  if (!editable && tall) return sizes.expandedLg.verPad;
  if (!editable) return sizes.expanded.verPad;
  return sizes.cell.verPad;
};

const getPaddingHor = ({ editable, expandedRow, tall, sizes }) => {
  if (expandedRow) return sizes.afterRow.horPad;
  if (!editable && tall) return sizes.expandedLg.horPad;
  if (!editable) return sizes.expanded.horPad;
  return sizes.cell.horPad;
};

const getPaddingRight = ({
  editable,
  innerActions,
  innerActionsWidth,
  innerEllipsis,
  expandedRow,
  hasComplexContent,
  resizable,
  tall,
  sizes,
}) => {
  let paddingRight = getPaddingHor({
    editable,
    expandedRow,
    tall,
    sizes,
  });
  if (hasComplexContent && innerEllipsis) {
    paddingRight += 10 + paddingRight / 2;
  }
  if (resizable) {
    paddingRight += 4;
  }
  if (innerActions) {
    paddingRight += innerActionsWidth + paddingRight / 2;
  }
  return paddingRight;
};

// no se le pasa heightProp
// ${({ heightProp }) => css`
//   min-height: ${heightProp && heightProp + 'px'};
// `}

export const StyledTableCellWrapper = styled.div<ColDef>`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ actionsCell, expandedRow, isDragging, isCellPopover }) => css`
    position: ${actionsCell || expandedRow || isDragging || isCellPopover
      ? 'relative'
      : 'absolute'};
  `}

  ${({ cellStyle }) => css`
    justify-content: ${() => {
      if (cellStyle.align?.horizontal === 'left') return 'flex-start';
      if (cellStyle.align?.horizontal === 'right') return 'flex-end';
      if (cellStyle.align?.horizontal === 'center') return 'center';
      return 'flex-start';
    }};
    align-items: ${() => {
      if (cellStyle.align?.vertical === 'top') return 'flex-start';
      if (cellStyle.align?.vertical === 'bottom') return 'flex-end';
      if (cellStyle.align?.vertical === 'center') return 'center';
      return 'center';
    }};
  `}

  ${({ theme }) => {
    // const tokens = theme.cmp.table;
    // const cmpTokens = tokens.cellWrapper;
    // parece no tener efecto
    // text-align: ${cellStyle.textAlign};
    // font-size: ${cmpTokens.typo.fontSize[size || 'md']};
    return css`
      color: ${theme.alias.color.text.body.base};
    `;
  }}

  ${({ cellStyle, theme, expandedRow }) => {
    const tokens = theme.cmp.table;
    const sizes = getSizesObj({ density: cellStyle.density, tokens });
    const borderRadius = sizes.row.br + 'px';

    return css`
      // border radius of first and last cell for radius of row
      ${!expandedRow &&
      css`
        ${StyledTableRow} > ${StyledTableCell}:first-child & {
          border-radius: ${borderRadius} 0 0 ${borderRadius};
        }
        ${StyledTableRow} > ${StyledTableCell}:last-child & {
          border-radius: 0 ${borderRadius} ${borderRadius} 0;
        }
      `};
    `;
  }}

  ${({
    theme,
    cellStyle,
    toEdge,
    editable,
    expandedRow,
    tall,
    innerActions,
    innerActionsWidth,
    innerEllipsis,
    hasComplexContent,
    resizable,
    toRightEdge,
    toLeftEdge,
  }) => {
    const tokens = theme.cmp.table;
    const sizes = getSizesObj({ density: cellStyle.density, tokens });

    const paddingVer = !toEdge
      ? getPaddingVer({
          editable,
          expandedRow,
          tall,
          sizes,
        }) + 'px'
      : '0 px';

    const paddingHor = !toEdge
      ? getPaddingHor({
          editable,
          expandedRow,
          tall,
          sizes,
        }) + 'px'
      : '0 px';

    const paddingRight =
      getPaddingRight({
        editable,
        innerActions,
        innerActionsWidth,
        innerEllipsis,
        expandedRow,
        hasComplexContent,
        resizable,
        tall,
        sizes,
      }) + 'px';

    return css`
      padding: ${paddingVer} ${paddingHor};
      padding-right: ${toRightEdge ? 0 : paddingRight};
      padding-left: ${toLeftEdge ? 0 : paddingHor};
    `;
  }}

  ${({ theme, expandedRow, striped, isEvenRow }) => {
    const tokens = theme.cmp.table;
    const cmpTokens = tokens.cellWrapper;

    return css`
      // styles when its parent is the after-row cell
      ${expandedRow &&
      css`
        overflow: hidden;
        &::before,
        &::after {
          ${pseudoElementMixin({})};
          height: 0.4rem;
          left: -1rem;
          right: -1rem;
        }
        &::before {
          height: 0.3rem;
          top: -0.3rem;
          box-shadow: ${striped && isEvenRow
            ? cmpTokens.elevation.boxShadow.before.strong
            : cmpTokens.elevation.boxShadow.before.base};
        }
        &::after {
          height: 0.4rem;
          bottom: -0.4rem;
          box-shadow: ${cmpTokens.elevation.boxShadow.after};
        }
      `}
    `;
  }}

  ${({ innerEllipsis, hasComplexContent }) =>
    css`
      // for complex cell component content ellipsis: tags
      ${hasComplexContent &&
      innerEllipsis &&
      css`
        &::after {
          content: '...';
          position: absolute;
          right: 1.2rem;
        }
      `}
    `}
`;
