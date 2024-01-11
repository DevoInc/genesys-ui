import styled, { css } from 'styled-components';
import * as PopperJS from '@popperjs/core';
import { POPOVER_ARROW_SIZE } from '../constants';

export interface StyledPopoverArrowProps {
  placement?: PopperJS.ComputedPlacement;
}

export const StyledPopoverArrow = styled.div<StyledPopoverArrowProps>`
  border-color: transparent;
  border-style: solid;

  ${({ placement, theme }) => {
    const bgColor = theme.cmp.panel.color.background;
    // TODO: Tokenize the Popover component QUV-2016
    const arrowSize = POPOVER_ARROW_SIZE;

    return css`
      position: relative;
      width: ${arrowSize};
      height: ${arrowSize};

      ${placement?.includes('top') &&
      css`
        top: calc(100% - 0.1rem);
        border-top-color: ${bgColor};
        border-width: ${arrowSize} ${arrowSize} 0;
      `};

      ${placement?.includes('bottom') &&
      css`
        bottom: calc(100% - ${arrowSize});
        border-bottom-color: ${bgColor};
        border-width: 0 ${arrowSize} ${arrowSize};
      `};

      ${placement?.includes('right') &&
      css`
        right: calc(100% - 0.9rem);
        border-right-color: ${bgColor};
        border-width: ${arrowSize} ${arrowSize} ${arrowSize} 0;
      `};

      ${placement?.includes('left') &&
      css`
        left: calc(100% - 0.1rem);
        border-left-color: ${bgColor};
        border-width: ${arrowSize} 0 ${arrowSize} ${arrowSize};
      `};
    `;
  }};
`;
