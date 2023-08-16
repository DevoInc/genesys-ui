import * as PopperJS from '@popperjs/core';
import styled, { css } from 'styled-components';

export interface StyledPopperArrowProps {
  /** Placement of the Popper with respect to the the trigger. */
  placement?: PopperJS.Placement;
  /** Custom zIndex of the Popper. */
  zIndex?: React.CSSProperties['zIndex'];
}

export const StyledPopperArrow = styled.div<StyledPopperArrowProps>`
  ${({ placement, theme, zIndex }) => {
    const tokens = theme.cmp.inlineMessage;
    const arrowSize = tokens.arrow.size.square;
    return css`
      height: calc(${arrowSize} * 2);
      width: calc(${arrowSize} * 2);

      z-index: calc(
        ${zIndex ? 0 : theme.alias.elevation.zIndex.depth.activated} + 1
      );

      ${placement?.includes('top') &&
      `
        --arrow-position: calc(100% - 0.1rem);
        top: var(--arrow-position);
      `};

      ${placement?.includes('bottom') &&
      `
        --arrow-position: calc(100% - 0.9rem);
        bottom: var(--arrow-position);
      `};

      ${placement?.includes('right') &&
      `
        --arrow-position: calc(100% - 0.9rem);
        right: var(--arrow-position);
      `};

      ${placement?.includes('left') &&
      `
        --arrow-position: calc(100% - 0.1rem);
        left: var(--arrow-position);
      `};
    `;
  }};
`;
