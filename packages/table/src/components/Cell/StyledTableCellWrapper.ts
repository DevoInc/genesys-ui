import styled, { css } from 'styled-components';
import { pseudoElementMixin } from '@devoinc/genesys-ui';
import { StyledTableCell } from '../../styled/StyledTableCell';
import { ColDef } from './declarations';
import { StyledTableRow } from '../Row/StyledTableRow';
import { getSizes } from '../utils';
import {
  getHorizontalPadding,
  getPaddingRight,
  getVerticalPadding,
} from './padding';
import { StyledTableCellProps } from '../../styled/declarations';

interface StyledTableCellWrapperProps extends ColDef, StyledTableCellProps {}

export const StyledTableCellWrapper = styled.th<StyledTableCellWrapperProps>`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ cellStyle }) => css`
    justify-content: ${() => {
      if (cellStyle?.align?.horizontal === 'left') return 'flex-start';
      if (cellStyle?.align?.horizontal === 'right') return 'flex-end';
      if (cellStyle?.align?.horizontal === 'center') return 'center';
      return 'flex-start';
    }};
    align-items: ${() => {
      if (cellStyle?.align?.vertical === 'top') return 'flex-start';
      if (cellStyle?.align?.vertical === 'bottom') return 'flex-end';
      if (cellStyle?.align?.vertical === 'center') return 'center';
      return 'center';
    }};
  `}

  ${({ theme }) => css`
    color: ${theme.alias.color.text.body.base};
  `}

  ${({ theme, expandedRow }) => {
    const tokens = theme.cmp.table;
    const sizes = getSizes(tokens);
    const borderRadius = sizes.row.br;

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
    const sizes = getSizes(tokens);

    const paddingVer = !toEdge
      ? getVerticalPadding({
          editable,
          expandedRow,
          tall,
          sizes,
        })
      : '0 px';

    const paddingHor = !toEdge
      ? getHorizontalPadding({
          editable,
          expandedRow,
          tall,
          sizes,
        })
      : '0 px';

    const paddingRight = getPaddingRight({
      editable,
      innerActions,
      innerActionsWidth,
      innerEllipsis,
      expandedRow,
      hasComplexContent,
      resizable,
      tall,
      sizes,
    });

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
