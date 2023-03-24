import * as React from 'react';
import styled, { css } from 'styled-components';

import { Direction } from './declarations';

export interface StyledDecoratorBarProps {
  /** Horizontal or Vertical direction **/
  direction?: Direction;
  /** Css width or height base on direction prop **/
  size?: React.CSSProperties['height'];
}

export const StyledDecoratorBar = styled.div<StyledDecoratorBarProps>`
  ${({ direction, size, theme }) => {
    const tokensDecoratorBar = theme.cmp.decoratorBar;

    return css`
      width: ${direction === 'horizontal'
        ? size
        : tokensDecoratorBar.shape.stroke};
      height: ${direction === 'horizontal'
        ? tokensDecoratorBar.shape.stroke
        : size};
      background-image: ${direction === 'horizontal'
        ? `linear-gradient(to right, ${tokensDecoratorBar.color.background})`
        : `linear-gradient(to bottom, ${tokensDecoratorBar.color.background})`};
    `;
  }}
`;
