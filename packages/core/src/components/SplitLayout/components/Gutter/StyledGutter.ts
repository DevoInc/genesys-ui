import styled, { css } from 'styled-components';

import { pseudoElementOverlayMixin } from '../../../../styled';
import type { TDirection } from '../../declarations';

export interface StyledGutterProps {
  $direction: TDirection;
  $isDragging: boolean;
  $size: number;
}

export const StyledGutter = styled.div<StyledGutterProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  overflow: hidden;
  transition: background ease
    ${({ theme }) => theme.cmp.splitLayout.mutation.transitionDuration};
  background: ${({ theme }) => theme.cmp.splitLayout.color.background.base};
  ${({ $direction, $isDragging, theme, $size }) => {
    return css`
      &::before {
        ${pseudoElementOverlayMixin()};
      }

      &:hover {
        &::before {
          background-color: ${theme.cmp.splitLayout.color.background.hovered};
        }
      }

      &:active {
        &::before {
          background-color: ${theme.cmp.splitLayout.color.background.pressed};
        }
      }

      ${$isDragging &&
      css`
        &::before {
          background-color: ${theme.cmp.splitLayout.color.background.dragging};
        }
      `};

      ${$direction === 'horizontal' &&
      css`
        border-left: ${theme.cmp.splitLayout.shape.borderSize.horizontal} solid;
        border-right: ${theme.cmp.splitLayout.shape.borderSize.horizontal} solid;
        width: ${$size}px;
        height: 100%;
        cursor: col-resize;
      `};

      ${$direction === 'vertical' &&
      css`
        border-top: ${theme.cmp.splitLayout.shape.borderSize.vertical} solid;
        border-bottom: ${theme.cmp.splitLayout.shape.borderSize.vertical} solid;
        width: 100%;
        height: ${$size}px;
        cursor: row-resize;
      `};

      border-color: ${theme.cmp.splitLayout.color.border};
    `;
  }};
`;
