import styled, { css } from 'styled-components';
import { pseudoElementOverlayMixin } from '../../../styled/mixins';
import type { ISplitter } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledSplitPaneSeparatorProps
  extends Pick<ISplitter, 'layoutChanging' | 'vertical'> {}

export const StyledSplitPaneSeparator = styled.div<StyledSplitPaneSeparatorProps>`
  ${({ vertical = false, layoutChanging = false, theme }) => {
    const aliasTokens = theme.alias;
    const separatorSize = '1rem';
    return css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 auto;
      transition: background ease
        ${aliasTokens.mutation.transitionDuration.blink};
      background: ${aliasTokens.color.background.surface.base.raised};
      color: ${aliasTokens.color.text.body.base};

      &:hover {
        color: ${aliasTokens.color.text.body.stronger};
      }

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

      ${layoutChanging &&
      css`
        &::before {
          background-color: ${aliasTokens.color.background.surface.backdrop.base
            .hovered};
        }
      `};

      ${!vertical &&
      css`
        cursor: col-resize;
        height: 100%;
        width: ${separatorSize};
        border-left: ${aliasTokens.shape.borderSize.separator.md} solid;
        border-right: ${aliasTokens.shape.borderSize.separator.md} solid;
      `};

      ${vertical &&
      css`
        border-top: ${aliasTokens.shape.borderSize.separator.md} solid;
        border-bottom: ${aliasTokens.shape.borderSize.separator.md} solid;
        height: ${separatorSize};
        width: 100%;
        cursor: row-resize;

        svg {
          transform: rotate(90deg);
        }
      `};

      border-color: ${aliasTokens.color.border.separator.base.weak};
    `;
  }}
`;
