import styled, { css } from 'styled-components';
import { StyledTableCellProps } from './declarations';
import {
  typoMixin,
  // TODO: Read at components mention above
  // StyledTagGroup,
  // StyledTagGroupList,
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
      max-height: ${typeProp === 'date' || typeProp === 'tags'
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

*/ TODO: Find equivalent Genesys UI component and verify the utility of this styles
  // avoid overflow with long text tags in expanded mode
  $ {StyledTagGroup},
  $ {StyledTagGroupList} {
    flex-wrap: wrap;
    max-width: 100%;
  }
  /*
`;
