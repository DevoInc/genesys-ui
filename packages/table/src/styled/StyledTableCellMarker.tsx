import * as React from 'react';
import styled, { css } from 'styled-components';

import { Icon } from '@devoinc/genesys-ui';
import { StyledTableRow } from './StyledTableRow';
import { StyledTableCellWrapper } from '../components/cell/StyledTableCellWrapper';
import { StyledTableCellProps } from './declarations';

export const StyledTableCellMarker = styled((props) => (
  <Icon {...props} />
))<StyledTableCellProps>`
  cursor: inherit;

  ${({ theme }) => {
    const tokens = theme.cmp.table.cellMarker;
    const transitionDuration = tokens.mutation.transitionDuration;

    return css`
      transition: opacity ease ${transitionDuration},
        color ease ${transitionDuration};
    `;
  }}

  opacity: 0;

  ${({ theme }) => {
    const tokens = theme.cmp.table.cellMarker;

    return css`
      color: ${tokens.color.text.enabled};
    `;
  }}

  ${StyledTableRow}:hover &,
      ${StyledTableCellWrapper}:hover &,
      ${StyledTableCellWrapper}:focus & {
    opacity: ${(props) => !props.expanded && '1'};
  }

  ${({ disabled, theme }) => {
    const tokens = theme.cmp.table.cellMarker;
    return css`
      ${!disabled &&
      css`
        ${StyledTableCellWrapper}:hover &,
          ${StyledTableCellWrapper}:focus & {
          color: ${tokens.color.text.hovered};
        }
      `};
    `;
  }}
`;
