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
    ${({ theme }) => theme.alias.mutation.transitionDuration.blink};
  background: ${({ theme }) =>
    theme.alias.color.background.surface.base.raised};
  ${({ $direction, $isDragging, theme, $size }) => {
    const aliasTokens = theme.alias;
    return css`
      &::before {
        ${pseudoElementOverlayMixin()};
      }

      &:hover {
        &::before {
          background-color: ${aliasTokens.color.background.surface.backdrop.base
            .hovered};
        }
      }

      &:active {
        &::before {
          background-color: ${aliasTokens.color.background.surface.backdrop.base
            .pressed};
        }
      }

      ${$isDragging &&
      css`
        &::before {
          background-color: ${aliasTokens.color.background.surface.backdrop.base
            .hovered};
        }
      `};

      ${$direction === 'horizontal' &&
      css`
        border-left: ${aliasTokens.shape.borderSize.separator.md} solid;
        border-right: ${aliasTokens.shape.borderSize.separator.md} solid;
        width: ${$size}px;
        height: 100%;
        cursor: col-resize;
      `};

      ${$direction === 'vertical' &&
      css`
        border-top: ${aliasTokens.shape.borderSize.separator.md} solid;
        border-bottom: ${aliasTokens.shape.borderSize.separator.md} solid;
        width: 100%;
        height: ${$size}px;
        cursor: row-resize;
      `};

      border-color: ${aliasTokens.color.border.separator.base.weak};
    `;
  }};
`;
