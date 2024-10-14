import styled, { css, CSSProp } from 'styled-components';
import { ComputedPlacement } from '@popperjs/core';

export interface StyledPopoverArrowProps {
  $placement?: ComputedPlacement;
  $size?: number;
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledPopoverArrow = styled.div<StyledPopoverArrowProps>`
  border-color: transparent;
  border-style: solid;

  ${({ $placement, $size, theme }) => {
    const arrowSize = $size
      ? `${$size}px`
      : `${theme.cmp.popover.arrow.size.square.inner}px`;
    const arrowOuterSize = $size
      ? `${$size + 1}px`
      : `${theme.cmp.popover.arrow.size.square.outer}px`;
    const bgColor = theme.cmp.panel.color.background;
    const borderColor = theme.cmp.panel.color.border.activated;
    const arrowBorderSize = theme.cmp.popover.arrow.shape.borderSize;
    const commonStyles = css`
      position: relative;
      border-style: solid;
      border-color: transparent;
      height: calc(${arrowOuterSize} * 2);
      width: calc(${arrowOuterSize} * 2);
    `;
    return css`
      ${commonStyles};

      &::after {
        ${commonStyles};
        position: absolute;
        content: '';
        display: block;
        width: 0;
        height: 0;
      }

      ${$placement?.includes('top') &&
      css`
        height: calc(${arrowOuterSize} * 1);
        width: calc(${arrowOuterSize} * 2);
        bottom: -${arrowSize};
        border-top-color: ${borderColor};
        border-width: ${arrowOuterSize} ${arrowOuterSize} 0;

        &::after {
          top: calc(-${arrowSize} - ${arrowBorderSize} * 2);
          left: -${arrowSize};
          border-top-color: ${bgColor};
          border-width: ${arrowSize} ${arrowSize} 0;
        }
      `};

      ${$placement?.includes('bottom') &&
      css`
        height: calc(${arrowOuterSize} * 1);
        width: calc(${arrowOuterSize} * 2);
        top: -${arrowSize};
        border-bottom-color: ${borderColor};
        border-width: 0 ${arrowOuterSize} ${arrowOuterSize};

        &::after {
          top: calc(${arrowBorderSize} * 2);
          left: -${arrowSize};
          border-bottom-color: ${bgColor};
          border-width: 0 ${arrowSize} ${arrowSize};
        }
      `};

      ${$placement?.includes('right') &&
      css`
        width: calc(${arrowOuterSize} * 1);
        height: calc(${arrowOuterSize} * 2);
        left: calc(-100% + ${arrowBorderSize});
        border-right-color: ${borderColor};
        border-width: ${arrowOuterSize} ${arrowOuterSize} ${arrowOuterSize} 0;

        &::after {
          top: calc(-${arrowSize});
          left: calc(${arrowBorderSize} * 2);
          right: calc(100% - (${arrowSize} - ${arrowBorderSize}));
          border-right-color: ${bgColor};
          border-width: ${arrowSize} ${arrowSize} ${arrowSize} 0;
        }
      `};

      ${$placement?.includes('left') &&
      css`
        width: calc(${arrowOuterSize} * 1);
        height: calc(${arrowOuterSize} * 2);
        right: calc(-100% + ${arrowBorderSize});
        border-left-color: ${borderColor};
        border-width: ${arrowOuterSize} 0 ${arrowOuterSize} ${arrowOuterSize};

        &::after {
          top: calc(-${arrowSize} - ${arrowBorderSize});
          left: calc(100% - ${arrowOuterSize} - ${arrowBorderSize} * 2);
          border-left-color: ${bgColor};
          border-width: ${arrowOuterSize} 0 ${arrowOuterSize} ${arrowOuterSize};
        }
      `};
    `;
  }};
`;
