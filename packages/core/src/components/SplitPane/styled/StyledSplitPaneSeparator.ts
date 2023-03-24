import styled, { css } from 'styled-components';
import { pseudoElementOverlayMixin } from '../../../styled/mixins/utilsMixins';

export interface StyledSplitPaneSeparatorProps {
  vertical?: boolean;
  layoutChanging?: boolean;
}

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

      &::before {
        ${pseudoElementOverlayMixin};
      }

      i {
        position: relative;
        color: ${aliasTokens.color.text.body.base};
      }

      &:hover {
        &::before {
          background-color: ${aliasTokens.color.background.surface.backdrop.base
            .hovered};
        }

        i {
          color: ${aliasTokens.color.text.body.stronger};
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

        i {
          transform: rotate(90deg);
        }
      `};

      border-color: ${aliasTokens.color.border.separator.base.weak};
    `;
  }}
`;
