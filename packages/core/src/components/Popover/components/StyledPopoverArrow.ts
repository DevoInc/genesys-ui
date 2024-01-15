import styled, { css } from 'styled-components';
import * as PopperJS from '@popperjs/core';
import { POPOVER_DEFAULT_ARROW_SIZE } from '../constants';

export interface StyledPopoverArrowProps {
  placement?: PopperJS.ComputedPlacement;
  size?: number;
}

export const StyledPopoverArrow = styled.div<StyledPopoverArrowProps>`
  border-color: transparent;
  border-style: solid;

  ${({ placement, size = POPOVER_DEFAULT_ARROW_SIZE, theme }) => {
    const bgColor = theme.cmp.panel.color.background;
    // TODO: get border-color token from Panel component QUV-2019. Wait until QUV-2018 is finished.
    const borderColor = theme.alias.color.border.elevation.activated;
    // TODO: Tokenize the Popover component QUV-2016
    const arrowSize = `${size}px`;
    const arrowOuterSize = `${size + 1}px`;
    const panelBorderSize = theme.alias.shape.borderSize.panel.base;
    const commonStyles = css`
      position: relative;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
    `;
    return css`
      ${commonStyles};

      &::after {
        ${commonStyles};
        position: absolute;
        content: '';
        display: block;
      }

      ${placement?.includes('top') &&
      css`
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

      ${placement?.includes('bottom') &&
      css`
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

      ${placement?.includes('right') &&
      css`
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

      ${placement?.includes('left') &&
      css`
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
