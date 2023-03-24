import * as PopperJS from '@popperjs/core';
import styled, { css } from 'styled-components';

export interface StyledPopperArrowProps {
  /** Placement of the Popper with respect to the the trigger. */
  placement?: PopperJS.Placement;
  /** Custom zIndex of the Popper. */
  zIndex?: React.CSSProperties['zIndex'];
}

export const StyledPopperArrow = styled.div<StyledPopperArrowProps>`
  ${({ placement, theme, zIndex }) => css`
    --arrow-position: calc(100% - 0.1rem);

    z-index: calc(
      ${zIndex ? 0 : theme.alias.elevation.zIndex.depth.activated} + 1
    );

    ${placement?.includes('top') &&
    css`
      top: var(--arrow-position);
    `};

    ${placement?.includes('bottom') &&
    css`
      bottom: var(--arrow-position);
    `};

    ${placement?.includes('right') &&
    css`
      right: var(--arrow-position);
    `};

    ${placement?.includes('left') &&
    css`
      left: var(--arrow-position);
    `};
  `};
`;
