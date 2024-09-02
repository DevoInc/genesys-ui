import styled, { css } from 'styled-components';

import type { IDecoratorBarStyled } from './declarations';

export interface StyledDecoratorBarProps extends IDecoratorBarStyled {}

export const StyledDecoratorBar = styled.div<StyledDecoratorBarProps>`
  ${({ $direction, $size, theme }) => {
    const tokensDecoratorBar = theme.cmp.decoratorBar;

    return css`
      width: ${$direction === 'horizontal'
        ? $size
        : tokensDecoratorBar.shape.stroke};
      height: ${$direction === 'horizontal'
        ? tokensDecoratorBar.shape.stroke
        : $size};
      background-image: ${$direction === 'horizontal'
        ? `linear-gradient(to right, ${tokensDecoratorBar.color.background})`
        : `linear-gradient(to bottom, ${tokensDecoratorBar.color.background})`};
    `;
  }}
`;
