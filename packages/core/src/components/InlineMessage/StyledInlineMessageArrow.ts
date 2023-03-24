import styled, { css } from 'styled-components';
import * as PopperJS from '@popperjs/core';

import { IconButtonStatusProps } from '../../';

interface StyledInlineMessageArrowProps {
  placement?: PopperJS.Placement;
  status?: IconButtonStatusProps['colorScheme'];
}

export const StyledInlineMessageArrow = styled.div<StyledInlineMessageArrowProps>`
  ${({ placement, status = 'help', theme }) => {
    const tokens = theme.cmp.inlineMessage;
    const bgColor = tokens.color.border[status];
    const arrowSize = tokens.arrow.size.square;

    return css`
      border-color: transparent;
      border-style: solid;
      width: ${arrowSize};
      height: ${arrowSize};

      ${placement?.includes('top') &&
      css`
        border-top-color: ${bgColor};
        border-width: ${arrowSize} ${arrowSize} 0;
      `};

      ${placement?.includes('bottom') &&
      css`
        border-bottom-color: ${bgColor};
        border-width: 0 ${arrowSize} ${arrowSize};
      `};

      ${placement?.includes('right') &&
      css`
        border-right-color: ${bgColor};
        border-width: ${arrowSize} ${arrowSize} ${arrowSize} 0;
      `};

      ${placement?.includes('left') &&
      css`
        border-left-color: ${bgColor};
        border-width: ${arrowSize} 0 ${arrowSize} ${arrowSize};
      `};
    `;
  }};
`;
