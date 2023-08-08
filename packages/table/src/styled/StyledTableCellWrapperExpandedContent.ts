import styled, { css } from 'styled-components';

import { COLUMN_TYPE } from '../constants/column';
import { StyledTableCellProps } from './declarations';
import {
  typoMixin,
  StyledTagGroup,
  StyledTagGroupList,
} from '@devoinc/genesys-ui';
import { getSizes } from '../components/utils';

export const StyledTableCellWrapperExpandedContent = styled.div<StyledTableCellProps>`
  position: relative;
  overflow: auto;
  max-width: 100%;

  ${({ theme, typeProp }) => {
    const tableTokens = theme.cmp.table;
    const cmpTokens = tableTokens.cellExpandedContent;

    return css`
      max-height: ${typeProp?.startsWith(COLUMN_TYPE.DATE) ||
      typeProp === COLUMN_TYPE.STATUS
        ? 'none'
        : cmpTokens.size.maxHeight};
    `;
  }}

  ${({ theme, tall, editable }) => {
    const tableTokens = theme.cmp.table;

    const paddingHor = getSizes(tableTokens).cell.horPad;
    const paddingVer = tall
      ? getSizes(tableTokens).cell.verPadTall
      : getSizes(tableTokens).cell.verPad;

    return css`
      padding: ${paddingVer} ${paddingHor};
      padding-right: ${!editable && theme.alias.space.cmp.lg};
    `;
  }}

  word-break: break-all;

  ${({ theme }) => {
    return css`
      // default text styles
      ${typoMixin({ variant: 'body', theme })};
    `;
  }}

  // avoid overflow with long text tags in expanded mode
  ${StyledTagGroup},
  ${StyledTagGroupList} {
    flex-wrap: wrap;
    max-width: 100%;
  }
`;
