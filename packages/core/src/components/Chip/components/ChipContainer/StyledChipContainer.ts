import styled, { css, CSSProp } from 'styled-components';

import { disabledMixin } from '../../../../styled/mixins/state';
import { btnResetMixin } from '../../../../styled/mixins/components';
import { pseudoElementOverlayMixin } from '../../../../styled/mixins/pseudoElement';
import { getPadding } from '../../helpers';
import { type IChipContainerStyled } from './declarations';

export interface StyledChipContainerProps extends IChipContainerStyled {
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledChipContainer = styled.label<StyledChipContainerProps>`
  ${({ $size = 'md', $sortable = false, $state = 'enabled', theme }) => {
    const chipTokens = theme.cmp.chip;
    const backdropHovered = chipTokens.color.backdrop.hovered;
    const backdropFocused = chipTokens.color.backdrop.focused;
    const backdropPressed = chipTokens.color.backdrop.pressed;
    return css`
      ${btnResetMixin};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex: 0 0 auto;
      transition: all ${chipTokens.mutation.transitionDuration} ease;
      overflow: hidden;
      border: none;
      border-radius: ${chipTokens.shape.borderRadius};
      min-width: ${chipTokens.size.minWidth[$size]};
      height: ${chipTokens.size.height[$size]};
      padding: ${getPadding({ $size, $sortable, tokens: chipTokens })};
      background-color: ${chipTokens.color.background[$state]};
      font-size: ${chipTokens.label.typo.fontSize[$size]};
      line-height: ${chipTokens.label.typo.lineHeight[$size]};
      text-shadow: ${$state === 'selected' && '0 0 .05rem'};
      color: ${chipTokens.color.text.selected};

      // backdrop for states

      &::before {
        ${pseudoElementOverlayMixin()};
        background-color: transparent;
        transition: all ${chipTokens.mutation.transitionDuration} ease;
      }

      // states

      ${$state === 'disabled' &&
      css`
        ${disabledMixin(theme)}
      `}

      ${$state !== 'disabled' &&
      css`
        &&&:not(:disabled):not(:has(:disabled)) {
          &:hover,
          &:focus,
          &:active {
            outline: none;
            z-index: 1;
            opacity: 1;
          }

          &:hover {
            color: ${chipTokens.color.text.hovered};
          }

          &:focus {
            color: ${chipTokens.color.text.focused};
          }

          &:focus-within {
            box-shadow: ${chipTokens.elevation.boxShadow.focused};
          }

          &:active {
            color: ${chipTokens.color.text.pressed};
          }

          &:hover::before {
            background-color: ${backdropHovered};
          }

          &:focus::before {
            background-color: ${backdropFocused};
          }

          &:active::before {
            background-color: ${backdropPressed};
          }

          ${$state === 'hovered' &&
          css`
            color: ${chipTokens.color.text.hovered};

            &&&::before {
              background-color: ${backdropHovered};
            }
          `};

          ${$state === 'focused' &&
          css`
            box-shadow: ${chipTokens.elevation.boxShadow.focused};
            color: ${chipTokens.color.text.focused};

            &&&::before {
              background-color: ${backdropFocused};
            }
          `};

          ${$state === 'pressed' &&
          css`
            color: ${chipTokens.color.text.pressed};

            &&&::before {
              background-color: ${backdropPressed};
            }
          `};
        }
      `}

      // get the selected and activated styles in uncontrolled way too
      &&&:has(:checked) {
        background-color: ${chipTokens.color.background.selected};
        color: ${chipTokens.color.text.selected};
        text-shadow: 0 0 0.05rem;
      }

      // get the disabled in uncontrolled way and when they are inside a disabled fieldset
      &&&:has(:disabled) {
        ${disabledMixin(theme)};
      }
    `;
  }};
`;
