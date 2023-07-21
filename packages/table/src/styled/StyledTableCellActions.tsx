import * as React from 'react';
import styled, { css } from 'styled-components';

import { ActionGroup } from '@devoinc/genesys-ui';

import { StyledTableRow } from './StyledTableRow';
import { getFixedSizesObj, getSizesObj } from '../constants';

export const StyledTableCellActions = styled((props) => (
  <ActionGroup {...props} />
))`
  position: absolute;
  top: 50%;
  transition: opacity ease 0.15s;

  ${({ density, theme }) => {
    const tokens = theme.tokens.cmp.table;
    const actionsSize = getFixedSizesObj(tokens).cellActions.actionSize + 'px';
    return css`
      right: ${getSizesObj({ density, tokens }).cell.horPad + 'px'};
      margin-top: ${`calc(${actionsSize} / 2 * -1)`};
    `;
  }}

  ${({ highlighted }) => {
    return css`
      opacity: ${highlighted ? '1' : '0'};
      ${StyledTableRow}:hover & {
        opacity: 1;
      }
    `;
  }}
`;
