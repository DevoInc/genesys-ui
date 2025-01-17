import styled, { css } from 'styled-components';

import { pseudoElementMixin } from '@devoinc/genesys-ui';

import type { TDensity } from '../../declarations';

interface StyledHeaderCellResizerProps {
  $density: TDensity;
}

export const StyledHeaderCellResizer = styled.span<StyledHeaderCellResizerProps>`
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  transform-origin: center;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 1rem;
  height: 100%;
  cursor: col-resize;

  ${({ $density, theme }) => {
    const grabberTokens = theme.cmp.table.headCellGrabber;
    const transitionDuration = grabberTokens.mutation.transitionDuration;
    const separatorTokens = theme.cmp.table.headCellSeparator;
    return css`
      z-index: ${grabberTokens.elevation.zIndex};
      transition:
        background-color ${transitionDuration} ease,
        height ${transitionDuration} ease;

      &::before,
      &::after {
        ${pseudoElementMixin()};
        right: 0;
        cursor: col-resize;
      }

      &::before {
        top: 0;
        height: 100%;
        width: 0;
        transition:
          background-color ${transitionDuration} ease,
          width ${transitionDuration} ease;
      }

      &::after {
        top: 50%;
        height: calc(${theme.cmp.table.head.size.height[$density]} / 2);
        transform: translateY(-50%);
        width: 0.2rem;
        background-color: ${separatorTokens.color.background.after};
        transition:
          background-color ${transitionDuration} ease,
          height ${transitionDuration} ease;
      }

      &:hover,
      &:active {
        &::before {
          background-color: ${grabberTokens.color.background.hovered};
          width: 1rem;
        }

        &::after {
          top: 0;
          height: 100%;
          transform: none;
          background-color: ${grabberTokens.color.background.after};
        }
      }
    `;
  }}
`;
