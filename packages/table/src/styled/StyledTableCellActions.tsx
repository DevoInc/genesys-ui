import * as React from 'react';
import styled, { css } from 'styled-components';
import { ActionGroup } from '@devoinc/genesys-ui';
import { getFixedSizesObj } from '../constants';
import { StyledTableRow } from '../components/Row/StyledTableRow';
import { getSizes } from '../components/utils';

export const StyledTableCellActions = styled((props) => (
  <ActionGroup {...props} />
))`
  position: absolute;
  top: 50%;
  transition: opacity ease 0.15s;

  ${({ theme }) => {
    const tokens = theme.tokens.cmp.table;
    const actionsSize = getFixedSizesObj(tokens).cellActions.actionSize;
    return css`
      right: ${getSizes(tokens).cell.horPad};
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
