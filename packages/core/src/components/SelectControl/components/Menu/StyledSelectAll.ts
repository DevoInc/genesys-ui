import styled, { css } from 'styled-components';

import type { ICommonSelectCmps } from '../../declarations';

export interface StyledSelectAllProps extends ICommonSelectCmps {}

export const StyledSelectAll = styled.div<StyledSelectAllProps>`
  ${({ multipleSubtle, size, theme }) => {
    const tokens = theme.cmp.select.selectAll;
    const fieldControlHorSpace = theme.alias.fields.space.padding.hor[size];
    const menuHorSpace = theme.alias.menus.wrapper.space.margin;
    return css`
      ${multipleSubtle
        ? css`
            padding: calc(${menuHorSpace} * 2) ${menuHorSpace} ${menuHorSpace}
              calc(${fieldControlHorSpace} + ${menuHorSpace});
          `
        : css`
            border-bottom: ${tokens.shape.border};
            padding: ${tokens.space.margin[size]};
          `}
    `;
  }}
`;
