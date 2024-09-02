import styled, { css, CSSProp } from 'styled-components';
import { ComputedPlacement } from '@popperjs/core';

import { POPOVER_DEFAULT_ARROW_SIZE } from './constants';

export interface StyledPopoverArrowProps {
  $placement?: ComputedPlacement;
  $size?: number;
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledPopoverArrow = styled.div<StyledPopoverArrowProps>`
  border-color: transparent;
  border-style: solid;

  ${({ $placement, $size = POPOVER_DEFAULT_ARROW_SIZE, theme }) => {
    const bgColor = theme.cmp.panel.color.background;
    // TODO: get border-color token from Panel component QUV-2019. Wait until QUV-2018 is finished.
    const borderColor = theme.alias.color.border.elevation.activated;
    // TODO: Tokenize the Popover component QUV-2016
    const arrowSize = `${$size}px`;
    const arrowOuterSize = `${$size + 1}px`;
    const panelBorderSize = theme.alias.shape.borderSize.panel.base;
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
          top: calc(-${arrowSize} - ${panelBorderSize} * 2);
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
          top: calc(${panelBorderSize} * 2);
          left: -${arrowSize};
          border-bottom-color: ${bgColor};
          border-width: 0 ${arrowSize} ${arrowSize};
        }
      `};

      ${$placement?.includes('right') &&
      css`
        width: calc(${arrowOuterSize} * 1);
        height: calc(${arrowOuterSize} * 2);
        left: calc(-100% + ${panelBorderSize});
        border-right-color: ${borderColor};
        border-width: ${arrowOuterSize} ${arrowOuterSize} ${arrowOuterSize} 0;

        &::after {
          top: calc(-${arrowSize});
          left: calc(${panelBorderSize} * 2);
          right: calc(100% - (${arrowSize} - ${panelBorderSize}));
          border-right-color: ${bgColor};
          border-width: ${arrowSize} ${arrowSize} ${arrowSize} 0;
        }
      `};

      ${$placement?.includes('left') &&
      css`
        width: calc(${arrowOuterSize} * 1);
        height: calc(${arrowOuterSize} * 2);
        right: calc(-100% + ${panelBorderSize});
        border-left-color: ${borderColor};
        border-width: ${arrowOuterSize} 0 ${arrowOuterSize} ${arrowOuterSize};

        &::after {
          top: calc(-${arrowSize} - ${panelBorderSize});
          left: calc(100% - ${arrowOuterSize} - ${panelBorderSize} * 2);
          border-left-color: ${bgColor};
          border-width: ${arrowOuterSize} 0 ${arrowOuterSize} ${arrowOuterSize};
        }
      `};
    `;
  }};
`;
