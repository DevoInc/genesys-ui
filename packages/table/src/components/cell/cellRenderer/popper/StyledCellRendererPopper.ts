import styled, { css } from 'styled-components';

import { COLUMN_TYPE, getSizesObj } from '../../../../constants';
import { StyledTableCellProps } from '../../../../styled/declarations';
import { typoMixin } from '@devoinc/genesys-ui';

export const StyledTableCellRendererPopper = styled.div<StyledTableCellProps>`
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

  ${({ theme, density, tall, editable }) => {
    const tableTokens = theme.cmp.table;

    const paddingHor =
      getSizesObj({ density, tokens: tableTokens }).cell.horPad + 'px';
    const paddingVer = tall
      ? getSizesObj({ density, tokens: tableTokens }).cell.verPadTall + 'px'
      : getSizesObj({ density, tokens: tableTokens }).cell.verPad + 'px';

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
`;
