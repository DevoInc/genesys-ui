import styled, { css } from 'styled-components';
import { CommonSelectCmpsProps } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledSelectAllProps extends CommonSelectCmpsProps {}

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
