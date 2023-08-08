import styled, { css } from 'styled-components';
import { getSizes } from '../components/utils';
import { StyledTableCellProps } from './declarations';

export const StyledTableCellEditableFooter = styled.footer<StyledTableCellProps>`
  display: flex;
  flex: 0;
  justify-content: flex-end;
  z-index: 1;
  ${({ theme }) => {
    const tokens = theme.cmp.table;
    const cmpTokens = tokens.cellEditableFooter;
    return css`
      border-top: solid ${cmpTokens.shape.borderSize} ${cmpTokens.color.border};
    `;
  }}
  ${({ theme }) => {
    const tokens = theme.cmp.table;
    const paddingVer = getSizes(tokens).expanded.verPad + 'px';
    const paddingHor = getSizes(tokens).expanded.horPad + 'px';
    return css`
      padding: ${`calc(${paddingVer} / 2) ${paddingHor}`};
    `;
  }}
  // avoid adding border to height of content block
  margin-top: -1px;
`;
